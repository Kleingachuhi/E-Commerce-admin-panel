import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('Error fetching users:', error));
  }, []);

  function handleClick() {
    if (!userName || !password) {
      alert("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const matchedUser = users.find(
        (user) => user.username === userName && user.password === password
      );

      if (matchedUser) {
        navigate("/home");
      } else {
        alert("Please key in the correct details");
      }

      setLoading(false);
    }, 2500);
  }

  return (
    <div className="login-page">
      <h1 className="access-account">Access Account</h1>
      <p className="login-paragraph">Your gateway to seamless access and Management</p>

      <input
        type="text"
        className="username-input"
        placeholder="Your username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        className="password-input"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="login-button"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Log In"}
      </button>
    </div>
  );
}

export default Login;