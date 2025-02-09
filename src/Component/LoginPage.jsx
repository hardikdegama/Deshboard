import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPageDesign.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Validate login against the stored users
    const validUser = users.find(user => user.username === username && user.password === password);
    
    if (validUser) {
      alert('Login successful!');
      navigate('/dashboard'); // Redirect to dashboard or home page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="image-side">
        <img src="/loginphoto.svg" alt="Login" />
      </div>
      <div className="form-side">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="footer-links">
          <Link to="/register">New Registration</Link> | 
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
