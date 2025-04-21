import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../src/App.css';

const AddProducts = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    sku: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('price', product.price);
      formData.append('stock', product.stock);
      formData.append('sku', product.sku);
      if (product.image) {
        formData.append('image', product.image);
      }

      await axios.post('http://localhost:3001/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/products');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

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
          <h2 className="section-title">Product images</h2>
          <div className="image-upload-container">
            <label className="image-upload-label">
              <input
                type="file"
                onChange={handleImageChange}
                className="image-upload-input"
                accept="image/*"
              />
              <span className="image-upload-text">Add an image</span>
            </label>
          </div>
        </div>

        <button type="submit" className="create-product-button">
          Create product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;