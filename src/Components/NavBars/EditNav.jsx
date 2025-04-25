import React from 'react'
import { NavLink } from 'react-router-dom'

function EditNav() {
  return (
    <div className='nav-bar' >
   <h3 className='edit-nav-text' >Sales Dashboard</h3>
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                <NavLink className='nav-link' to='/products'>Products Page</NavLink>
                        <NavLink className='nav-link' to='/add-product'>Add Product</NavLink>
    </div>
  )
}

export default EditNav