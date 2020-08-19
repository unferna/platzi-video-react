import React from 'react'

const CarouselCategoryItem = () => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src="https://images.pexels.com/photos/4050888/pexels-photo-4050888.jpeg?cs=srgb&dl=photo-of-woman-wearing-white-dress-4050888.jpg&fm=jpg" alt="People" />
      <div className="carousel-item__details">
          <div>
            <i className="material-icons">play_arrow</i>
            <i className="material-icons">playlist_add</i>
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">2019 16+ 114min</p>
      </div>
    </div>
  )
}

export default CarouselCategoryItem