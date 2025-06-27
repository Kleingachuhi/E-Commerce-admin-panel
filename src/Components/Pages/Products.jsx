import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
        return;
      }

      try {
        const response = await axios.get('https://e-commerce-admin-panel-but-now-the.onrender.com//api/products', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log('Fetched', response.data.products);
        const transformed = (response.data.products || []).map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.base_price,
          stock: product.items?.[0]?.stock_quantity || 0,
          sku: product.items?.[0]?.sku || 'N/A',
          image: product.items?.[0]?.image_url || '',
          category: product.category?.name || `Category ${product.category_id ?? 'N/A'}`
        }));

        setProducts(transformed);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.response?.data?.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = id => navigate(`/edit-product/${id}`);

  if (loading) return <div className="products-page"><div className="loading-spinner">Loading products...</div></div>;

  if (error) {
    return (
      <div className="products-page">
        <div className="error-message">{error}</div>
        <button onClick={() => window.location.reload()} className="retry-btn">Retry</button>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="products-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th><th>Name</th><th>Description</th>
              <th>Category</th><th>Price ($)</th><th>Stock</th><th>SKU</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map(product => (
                <tr key={product.id}>
                  <td>
                    {product.image && (
                      <img
                        src={product.image.startsWith('data:image') ? product.image : product.image}
                        alt={product.name}
                        className="product-img"
                        onError={e => { e.target.src = 'https://via.placeholder.com/150?text=No+Image'; }}
                      />
                    )}
                  </td>
                  <td>{product.name}</td><td>{product.description}</td><td>{product.category}</td>
                  <td>{product.price.toFixed(2)}</td><td>{product.stock}</td><td>{product.sku}</td>
                  <td><button onClick={() => handleEdit(product.id)} className="btn-edit">✏️ Edit</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-products">
                  {searchTerm ? 'No matching products found' : 'No products available'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsPage;
