import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://e-commerce-admin-panel-but-now-the.onrender.com/';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const welcomeMessages = {
    login: {
      heading: 'Welcome Back!',
      subheading: 'Sign in to manage your products'
    },
    signup: {
      heading: 'Join Our Community!',
      subheading: 'Create your account to get started'
    }
  };

  const currentMode = isLogin ? 'login' : 'signup';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const payload = isLogin 
        ? { username: formData.username, password: formData.password }
        : formData;

      const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/home');
      }
    } catch (err) {
      setError(err.response?.data?.message || 
              err.message || 
              `Failed to ${isLogin ? 'login' : 'sign up'}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <h1 className="access-account">{welcomeMessages[currentMode].heading}</h1>
      <p className="login-paragraph">
        {welcomeMessages[currentMode].subheading}
      </p>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="email"
            name="email"
            className="username-input"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ marginLeft: '7%' }}
          />
        )}
        
        <input
          type="text"
          name="username"
          className="username-input"
          placeholder="Your username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ marginLeft: '7%' }}
        />
        
        <input
          type="password"
          name="password"
          className="password-input"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ marginLeft: '7%' }}
        />

        <button
          type="submit"
          className="login-button"
          disabled={loading}
          style={{ 
            marginLeft: '7%',
            opacity: loading ? 0.7 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? "Processing..." : isLogin ? "Log In" : "Sign Up"}
        </button>
      </form>

      <p className="toggle-form">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button 
          type="button" 
          className="toggle-button"
          onClick={() => setIsLogin(!isLogin)}
          style={{
            background: 'none',
            border: 'none',
            color: 'blueviolet',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            font: 'inherit'
          }}
        >
          {isLogin ? "Sign up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default Login;