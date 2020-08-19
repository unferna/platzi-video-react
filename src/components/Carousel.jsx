import React from 'react'
import '../assets/styles/components/Carousel.scss'

const Carousel = ({ children, category_title }) => {
  return (
    <div className="categories">
      <h2 className="categories__title">{ category_title }</h2>

      { children }
    </div>
  )
}

export default Carousel