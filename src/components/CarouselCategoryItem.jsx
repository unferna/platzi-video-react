import React from 'react'
import PropTypes from 'prop-types'

const CarouselCategoryItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={ cover } alt={title} />
      <div className="carousel-item__details">
          <div>
            <i className="material-icons">play_arrow</i>
            <i className="material-icons">playlist_add</i>
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}min`}</p>
      </div>
    </div>
  )
}

CarouselCategoryItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default CarouselCategoryItem