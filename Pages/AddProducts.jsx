import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    sku: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(() => {
      navigate('/products')
    })
  }

  return (
    <div className="add-product-container">
      <h1 className="add-product-title">New Product</h1>
      
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-section">
          <h2 className="section-title">Product name</h2>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Insert product name"
            className="form-input"
            required
          />
        </div>

        <div className="form-section">
          <h2 className="section-title">Product description</h2>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Brief description of the product"
            className="form-textarea"
            rows="4"
            required
          />
        </div>

        <div className="form-section">
          <h2 className="section-title">Product price</h2>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Insert product price"
            className="form-input"
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-section">
          <h2 className="section-title">Stock quantity</h2>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Insert stock quantity"
            className="form-input"
            min="0"
            required
          />
        </div>

        <div className="form-section">
          <h2 className="section-title">SKU</h2>
          <input
            type="text"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            placeholder="Product SKU"
            className="form-input"
            required
          />
        </div>

        <div className="form-section">
          <h2 className="section-title">Product image URL</h2>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Paste image URL"
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="create-product-button">
          Create product
        </button>
      </form>
    </div>
  )
}