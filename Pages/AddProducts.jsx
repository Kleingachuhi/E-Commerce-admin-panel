import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    sku: '',
    image: '',
    category: ''
  });
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  
  useEffect(() => {
    const fetchCategories = () =>
        fetch('http://localhost:3000/Categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(console.error);
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });

    if (name === 'image') {
      setImagePreview(value);
    }
  };

  const generateSKU = () => {
    const prefix = product.name.substring(0, 3).toUpperCase();
    const randomNum = Math.floor(100 + Math.random() * 900);
    const sku = `${prefix}-${randomNum}`;
    setProduct({ ...product, sku });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!product.name || !product.price || !product.category) {
        throw new Error('Name, price, and category are required');
      }

      if (!product.sku) {
        generateSKU();
      }

      const productWithTimestamp = {
        ...product,
        createdAt: new Date().toISOString()
      };

      const response = await axios.post('http://localhost:3001/products', productWithTimestamp);
      
      if (response.status === 201) {
        navigate('/products', { state: { successMessage: 'Product created successfully!' } });
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to create product');
      console.error('Error creating product:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sales-dashboard">
        <h1 className="dashboard-title">Sales Dashboard</h1>
        
        <div className="product-form-card">
          <h2 className="form-header">New product</h2>
          
          <form onSubmit={handleSubmit} className="product-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <h3 className="section-title">Product name</h3>
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

            <div className="form-group">
              <h3 className="section-title">Product description</h3>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Brief description of the product"
                className="form-textarea"
                rows="4"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <h3 className="section-title">Product price ($)</h3>
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

              <div className="form-group">
                <h3 className="section-title">Stock quantity</h3>
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
            </div>

            <div className="form-row">
              <div className="form-group">
                <h3 className="section-title">SKU</h3>
                <div className="sku-input-group">
                  <input
                    type="text"
                    name="sku"
                    value={product.sku}
                    onChange={handleChange}
                    placeholder="Product SKU"
                    className="form-input"
                    required
                  />
                  <button 
                    type="button" 
                    onClick={generateSKU}
                    className="generate-sku-btn"
                  >
                    Generate
                  </button>
                </div>
              </div>

              <div className="form-group">
                <h3 className="section-title">Category</h3>
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
              {categories.map((category) => (
  <option key={category.name} value={category.name}>{category.name}</option>
))}

                </select>
              </div>
            </div>

            <div className="form-group">
              <h3 className="section-title">Product images</h3>
              <input
                type="text"
                name="image"
                value={product.image}
                onChange={handleChange}
                placeholder="Paste image URL"
                className="form-input"
              />
              {imagePreview && (
                <div className="image-preview">
                  <img src={imagePreview} alt="Product preview" className="preview-image" />
                  <div className="image-overlay">Preview</div>
                </div>
              )}
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="create-product-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create product'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}