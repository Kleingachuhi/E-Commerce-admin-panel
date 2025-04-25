import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductsNav() {
  return (
    <div className='nav-bar' >
        <h3 className='product-nav' > Sales Dashboard</h3>
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                <NavLink className='nav-link' to='/add-product'>Add Products Page</NavLink>
                        <NavLink className='nav-link' to='/edit-product'>Edit Product</NavLink>
    </div>
  )
}

export default ProductsNav