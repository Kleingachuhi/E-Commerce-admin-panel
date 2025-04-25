
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
    image: '',
    sku: ''
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/Categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

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
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
        console.error('Error fetching product:', error);
        navigate('/products');  
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId, navigate]);

  useEffect(() => {
    fetch('http://localhost:3000/Categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!product.name || !product.price || !product.category) {
      setError('Name, price, and category are required.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) throw new Error('Update failed');
      navigate('/products');  
    } catch (error) {
      console.error('Error updating product:', error);
      setError('Failed to update product.');
    }
  };

  return (
    <div className="edit-product-container">

      <hr className="divider" />

      <div className="edit-product-form">
        <h2>Edit Product</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              placeholder="Enter product description"
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
              placeholder="Enter product price"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sku">SKU</label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={product.sku}
              onChange={handleInputChange}
              placeholder="Enter SKU"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={product.image}
              onChange={handleInputChange}
              placeholder="Enter image URL"
            />
            {product.image && (
              <div className="image-preview">
                <img src={product.image} alt="Product" className="preview-image" />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="submit">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProducts;
