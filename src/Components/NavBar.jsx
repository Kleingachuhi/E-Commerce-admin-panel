import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // I need to create this with the group for styling this

function NavBar() {
  return (
    <nav className='nav-bar'>
      <NavLink 
        className='nav-link' 
        to='/products'
        activeClassName='active' 
      >
        Products
      </NavLink>
      <NavLink 
        className='nav-link' 
        to='/products/add' 
        activeClassName='active'
      >
        Add Product
      </NavLink>
    </nav>
  )
}

export default NavBar;