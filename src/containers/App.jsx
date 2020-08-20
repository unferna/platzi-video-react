import React, { useState, useEffect } from 'react'
import '../assets/styles/App.scss'

// Components
import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselCategory from '../components/CarouselCategory'
import CarouselCategoryItem from '../components/CarouselCategoryItem'
import Footer from '../components/Footer'

// Hooks
import useInitialState from '../hooks/useInitialState'

const API = `http://localhost:3001/initialState`

const App = () => {
  const categories = useInitialState(API)

  return (
    <React.StrictMode>
      <Header />
      <Search />
      
      {/* Other Categories */}
      { 
        categories.map(category => {
          return ( 
            <Carousel category_title={ category.title } key={ category.title }>
              <CarouselCategory>
                {
                  category.content.map(video => {
                    return (
                      <CarouselCategoryItem
                        key={ video.id }
                        { ...video }
                      />
                    )
                  })
                }
                
              </CarouselCategory>
            </Carousel>
          )
        })
      }

      <Footer />
    </React.StrictMode>
  )
}

export default App