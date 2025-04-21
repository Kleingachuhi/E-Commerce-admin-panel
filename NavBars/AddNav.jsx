import React from 'react'
import { NavLink } from 'react-router-dom'

function AddNav() {
  return (
    <div className='nav-bar' >
      <h3 className='product-nav' >Sales Dashboard</h3>
         <NavLink className='nav-link' to='/home'>Home</NavLink>
        <NavLink className='nav-link' to='/products'>Products Page</NavLink>
                <NavLink className='nav-link' to='/edit-product'>Edit Product</NavLink>
    </div>
  )
}

export default AddNav