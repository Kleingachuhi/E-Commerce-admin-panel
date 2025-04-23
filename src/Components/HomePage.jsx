import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="top-actions">
        <button onClick={() => navigate('/add-product')} className="action-btn primary">
          ➕ Add Product
        </button>
        <button onClick={() => navigate('/products')} className="action-btn secondary">
          🛠 Edit Product
        </button>
      </section>

      <section className="features-row">
        <div className="feature-card">
          <h2>Add Products</h2>
          <p>Add new products easily with rich details like price, stock, SKU, and image URL.</p>
        </div>
        <div className="feature-card">
          <h2>Edit Products</h2>
          <p>Modify product details quickly through our intuitive editor and keep data up to date.</p>
        </div>
        <div className="feature-card">
          <h2>View Products</h2>
          <p>Access your entire product catalog, search, and manage listings efficiently.</p>
        </div>
      </section>

      <section className="get-started-section">
        <h1>Ready to streamline your product management?</h1>
        <button onClick={() => navigate('/products')} className="get-started-btn">
          🚀 Get Started
        </button>
      </section>
    </div>
  );
}

export default HomePage;
