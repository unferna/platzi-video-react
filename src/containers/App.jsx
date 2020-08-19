import React from 'react'
import '../assets/styles/App.scss'

// Components
import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselCategory from '../components/CarouselCategory'
import CarouselCategoryItem from '../components/CarouselCategoryItem'
import Footer from '../components/Footer'

const App = () => (
  <React.StrictMode>
    <Header />
    <Search />

    <Carousel category_title="Home">
      <CarouselCategory>
        <CarouselCategoryItem />
        <CarouselCategoryItem />
      </CarouselCategory>
    </Carousel>

    <Carousel category_title="Sci-fi">
      <CarouselCategory>
        <CarouselCategoryItem />
        <CarouselCategoryItem />
        <CarouselCategoryItem />
      </CarouselCategory>
    </Carousel>

    <Carousel category_title="Comedy">
      <CarouselCategory>
        <CarouselCategoryItem />
      </CarouselCategory>
    </Carousel>

    <Footer />
  </React.StrictMode>
)

export default App