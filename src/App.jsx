import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProducts from './Pages/AddProducts';
import Products from './Pages/Products';
import EditProducts from './Pages/EditProducts';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import ErrorPage from './Components/ErrorPage';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProducts />} />
        <Route path="/products/edit/:id" element={<EditProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;