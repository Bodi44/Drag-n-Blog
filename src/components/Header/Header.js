import React from 'react'
import { NavLink, Link, Route } from 'react-router-dom'

import './Header.scss'
import BEM from '../../helpers/BEM'
const b = BEM('Header')

const MainButton = () => (
  <Link to={'/edit-article'} className={'Header__write-blog'}>
    <span className={'Header__write-blog_centered'}>Write New Blog!</span>
  </Link>
)

const Header = () => (
  <div className={b()}>
    <header className={b('header')}>
      <div className={b('left')}>
        <h1 className={b('logo-main')}>Drag'n'Blog</h1>
        <p className={b('logo-secondary')}>flexible-blog</p>
      </div>

      <div className={b('right')}>
        <form action="" className={b('search')}>
          <input className={b('input')} placeholder="Search" />
        </form>
        <Route exact path={'/'} component={MainButton} />
        <Route exact path={'/layout'} component={MainButton} />
        <Link to={'/'} className={b('user')} children={'User'} />
      </div>
    </header>

    <nav className={b('navigation')}>
      <NavLink
        exact
        to={'/'}
        className={b('nav-link')}
        activeClassName={b('nav-link', ['active'])}
        children={'Home'}
      />
      <NavLink
        to={'/layout'}
        className={b('nav-link')}
        activeClassName={b('nav-link', ['active'])}
        children={'Posts'}
      />
    </nav>
  </div>
)

export default Header