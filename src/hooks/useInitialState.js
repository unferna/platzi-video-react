import { useState, useEffect } from 'react'

const useInitialState = API => {
  const [ videos, setVideos ] = useState([])
  
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setVideos( data ))
  }, [])

  const categoryNames = Object.keys(videos ?? {}) ?? []

  return categoryNames.map(category => ({
    title: category.toUpperCase(),
    content: videos[category]
  })) 
}

export default useInitialState