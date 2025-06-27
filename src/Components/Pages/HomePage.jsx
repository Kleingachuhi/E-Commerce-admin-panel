import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoading(true);
      axios.get('https://e-commerce-admin-panel-but-now-the.onrender.com/api/auth/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(err => {
        setError(err.response?.data?.message || 'Failed to load user data');
        if (err.response?.status === 401) {
          navigate('/');
        }
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      {user ? (
        <div className="user-welcome">
          <h2>Welcome, {user.username}!</h2>
          <p>
            Role: <span className={user.role === 'admin' ? 'admin-badge' : 'user-badge'}>
              {user.role}
            </span>
          </p>
        </div>
      ) : (
        <div className="user-welcome">
          <h2>Welcome to E-Commerce Admin</h2>
          <p>Please log in to manage products</p>
        </div>
      )}

      {error && (
        <div className="error-message" style={{ margin: '0 auto 20px', maxWidth: '500px' }}>
          {error}
          <button 
            onClick={() => window.location.reload()} 
            className="logout-btn"
            style={{ marginLeft: '10px' }}
          >
            Retry
          </button>
        </div>
      )}

      <section className="top-actions">
        <button
          onClick={() => navigate('/add-product')}
          className={`action-btn primary ${!user || user?.role !== 'admin' ? 'disabled' : ''}`}
          disabled={!user || user?.role !== 'admin'}
          style={{
            opacity: !user || user?.role !== 'admin' ? 0.6 : 1,
            cursor: !user || user?.role !== 'admin' ? 'not-allowed' : 'pointer'
          }}
        >
          ➕ Add Product
        </button>
        <button
          onClick={() => navigate('/products')}
          className="action-btn secondary"
        >
          🛠 {user?.role === 'admin' ? 'Manage Products' : 'View Products'}
        </button>
      </section>

      <section className="features-row">
        <div className="feature-card">
          <h3>Add Products</h3>
          <p>Add new products with detailed information including images, pricing, and inventory.</p>
        </div>
        <div className="feature-card">
          <h3>Manage Inventory</h3>
          <p>Track stock levels and update product information as needed.</p>
        </div>
        <div className="feature-card">
          <h3>View Analytics</h3>
          <p>Access sales data and product performance metrics.</p>
        </div>
      </section>

      <section className="get-started-section">
        <h2>Ready to manage your products?</h2>
        <button
          onClick={() => navigate('/products')}
          className="get-started-btn"
        >
          🚀 Get Started
        </button>
      </section>
    </div>
  );
}

export default HomePage;