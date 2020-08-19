import React from 'react'
import '../assets/styles/components/Header.scss'

// Assets
import icUser from '../assets/static/icUser.png'

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="" />

      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={icUser} alt="User" />
          <p>Perfíl</p>
        </div>

        <ul>
          <li><a href="/">Cuenta</a></li>
          <li><a href="/">Cerrar Sesión</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header