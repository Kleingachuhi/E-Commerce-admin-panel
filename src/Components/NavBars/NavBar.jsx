import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className='nav-bar'>
        <NavLink className='nav-link' to='/products'>Products Page</NavLink>
        <NavLink className='nav-link' to='/add-product'>Add Product</NavLink>
        <NavLink className='nav-link' to='/edit-product'>Edit Product</NavLink>
      </div>
    </>
  )
}

export default NavBar