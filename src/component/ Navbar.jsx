import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Admin Panel</Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Products</Link>
        <Link to="/add" className="nav-link">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;