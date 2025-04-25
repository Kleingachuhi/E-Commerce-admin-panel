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
    fetch('https://e-commerce-admin-json.vercel.app/Categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));

    if (name === 'image') {
      setImagePreview(value);
    }
  }

  function generateSKU() {
    const prefix = product.name.substring(0, 3).toUpperCase();
    const randomNum = Math.floor(100 + Math.random() * 900);
    const newSku = `${prefix}-${randomNum}`;
    setProduct((prev) => ({ ...prev, sku: newSku }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!product.name || !product.price || !product.category) {
      setError('Name, price, and category are required.');
      setIsLoading(false);
      return;
    }

    const productWithDate = {
      ...product,
      createdAt: new Date().toISOString()
    };

    try {
      const response = await axios.post('https://e-commerce-admin-json.vercel.app/products', productWithDate);
      if (response.status === 201) {
        navigate('/products');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to create product.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="product-form-card">
      <h2 className="form-header">New Product</h2>

      <form onSubmit={handleSubmit} className="product-form">
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <h3 className="section-title">Product Name</h3>
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
          <h3 className="section-title">Product Description</h3>
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
            <h3 className="section-title">Product Price ($)</h3>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Insert product price"
              className="form-input"
              step="1000"
              min="100"
              required
            />
          </div>

          <div className="form-group">
            <h3 className="section-title">Stock Quantity</h3>
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
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <h3 className="section-title">Product Image</h3>
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
              <img
                src={imagePreview}
                alt="Product preview"
                className="preview-image"
              />
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
            {isLoading ? 'Creating...' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
}
