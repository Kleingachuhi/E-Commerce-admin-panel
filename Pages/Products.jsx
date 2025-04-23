import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleEdit = (id) => {
    navigate('/edit-product', { state: { productId: id } });
  };

  return (
    <div className="products-container">
      <h2>Products List</h2>
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
          {products.map(product => (
            <tr key={product.id}>
              <td>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsPage;
