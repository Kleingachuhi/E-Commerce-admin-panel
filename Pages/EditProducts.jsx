
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProducts() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    image: null,
    sku: ''
  });

  useEffect(() => {
   
    const fetchProduct = async () => {
      try {
        const mockProducts = [
          {
            id: '1',
            name: 'Vintage Leather Bag',
            category: 'Bags',
            description: 'The vintage leather bag is handcrafted from premium full-pitch leather, offering durability and timeless style. Its spacious interior and translational products make it perfect for everyday use or travel. The bag features sturdy handles and an adjustable shoulder strap for comfortable carrying. With its rustic palate and unique character, this bag adds a touch of sophisticated any outfit. Available in various colors, it\'s a must-have accessory for both men and women who appreciate quality and style.',
            price: '85.00',
            sku: 'V18-001'
          }
        ];
        
        const foundProduct = mockProducts.find(p => p.id === productId);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error('Product not found');
          navigate('/products');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProduct(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated product:', product);
    alert('Product updated successfully!');
    navigate('/products');
  };

  return (
    <div className="edit-product-container">
      <h1>Sales Dashboard</h1>
      
      <div className="product-nav">
        <button onClick={() => navigate('/products/add')}>Add Product</button>
        <button onClick={() => navigate('/add-product')}>Add Product</button>
        <button onClick={() => navigate('/products')}>Edit Product</button>
      </div>
      
      <hr className="divider" />
      
      <div className="edit-product-form">
        <h2>Edit Product</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              step="0.01"
              min="0"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Product Image</label>
            <div className="file-input">
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                accept="image/*"
              />
              <label htmlFor="image" className="file-label">
                {product.image ? product.image.name : 'No file chosen'}
              </label>
              <button type="button" className="file-button">
                Choose File
              </button>
            </div>
          </div>
          
          <div className="form-group">
            <label>Available SKU: {product.sku}</label>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="save-button">Save Changes</button>
            <button type="button" onClick={() => navigate('/products')} className="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProducts;