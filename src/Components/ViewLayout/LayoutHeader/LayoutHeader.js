import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../MainPage/MainHeader/Header.scss'
import '../../../css-grid/grid.scss'

const LayoutHeader = () => {
  return (
    <header className={'grid_12 Header'}>
      <div className={'grid_2 Header__logo Header__logo_layout'}>
        <h1 className={'logo__top'}>Drag'n'Blog</h1>
        <p className={'logo__bottom'}>flexible-blog</p>
      </div>
      <nav className={'Header__navigation'}>
        <NavLink
          to={'/'}
          className={'navigation__item'}>Home</NavLink>
        <NavLink
          to={'/layout'}
          className={'navigation__item'}
          activeClassName={'navigation__item navigation__item_active'}>ViewLayout</NavLink>
      </nav>
    </header>
  )
}

export default LayoutHeader