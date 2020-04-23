import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  return (
    <>
      <nav className='sidebar'>
        <p><NavLink to='/'>Home</NavLink></p>
        <ul>
          <li><NavLink className='main-link' to='/articles'>All Articles</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar