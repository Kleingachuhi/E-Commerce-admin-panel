// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function ProductsPage() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/products')
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.error('Error fetching products:', err));
//   }, []);

//   const handleEdit = (id) => {
//     navigate('/edit-product', { state: { productId: id } });
//   };

//   return (
//     <div className="products-container">
//       <h2>Products List</h2>
//       <table className="product-table">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Price ($)</th>
//             <th>Stock</th>
//             <th>SKU</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td>
//                 {product.image && (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '10px' }}
//                   />
//                 )}
//               </td>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.category}</td>
//               <td>{product.price}</td>
//               <td>{product.stock}</td>
//               <td>{product.sku}</td>
//               <td>
//                 <button onClick={() => handleEdit(product.id)} className="btn-edit">
//                   ✏️ Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductsPage;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function ProductsPage() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   useEffect(function () {
//     fetch('http://localhost:3000/products')
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         setProducts(data);
//       })
//       .catch(function (error) {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   function goToEdit(productId) {
//     navigate('/edit-product', { state: { productId: productId } });
//   }

//   return (
//     <div className="products-container">
//       <h2>Products List</h2>
//       <table className="product-table">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Price ($)</th>
//             <th>Stock</th>
//             <th>SKU</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(function (product) {
//             return (
//               <tr key={product.id}>
//                 <td>
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       style={{
//                         width: '120px',
//                         height: '120px',
//                         objectFit: 'cover',
//                         borderRadius: '10px'
//                       }}
//                     />
//                   ) : null}
//                 </td>
//                 <td>{product.name}</td>
//                 <td>{product.description}</td>
//                 <td>{product.category}</td>
//                 <td>{product.price}</td>
//                 <td>{product.stock}</td>
//                 <td>{product.sku}</td>
//                 <td>
//                   <button onClick={function () { goToEdit(product.id); }} className="btn-edit">
//                     ✏️ Edit
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductsPage;




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

  const handleEdit = (product) => {
    navigate('/edit-product', { state: { product } });
  };

  return (
    <div className="products-container">
      <h2>Products List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
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
                    style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                )}
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEdit(product)} className="btn-edit">
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
