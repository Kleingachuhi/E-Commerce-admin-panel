import React from 'react'
import { NavLink } from 'react-router-dom'
function HomeNav() {
  return (
    <div className='nav-bar' >
      <h3 className='home-nav-text' >Sales Dashboard</h3>
         <NavLink className='nav-link' to='/products'>Products Page</NavLink>
               <NavLink className='nav-link' to='/add-product'>Add Product</NavLink>
               <NavLink className='nav-link' to='/edit-product'>Edit Product</NavLink> 
    </div>
  )
}

export default HomeNav