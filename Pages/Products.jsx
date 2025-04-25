import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://e-commerce-admin-json.vercel.app/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); 
            })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products);
    } else {
      const lowerSearch = searchTerm.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(lowerSearch)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  return (
    <div className="products-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="products-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Stock</th>
              <th>SKU</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-img"
                      />
                    )}
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.sku}</td>
                  <td>
                    <button onClick={() => handleEdit(product.id)} className="btn-edit">
                      ✏️ Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '20px' }}>
                  No products found.
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