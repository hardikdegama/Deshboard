import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPageDesign.css'; // Import CSS for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Retrieve user data from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the entered username and password match any user in localStorage
        const validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
            alert('Login successful!');
            setError('');
            // Clear both fields after success
            setUsername('');
            setPassword('');
        } else {
            setError('Invalid username or password');
            // Clear only the password field on error
            setPassword('');
            setUsername('')
        }
    };

    return (
        <div className="login-container">
            <div className="image-side">
                <img src="/loginphoto.svg" alt="Login" />
            </div>
            <div className="form-side">
                <h2>Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            id="username"
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
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="twopage">
                    <p className="registation">
                        <Link to="/register">𝓝𝓮𝔀 𝓡𝓮𝓰𝓲𝓼𝓽𝓻𝓪𝓽𝓲𝓸𝓷</Link>
                    </p>
                    <p className="or">𝓞𝓻</p>
                    <p className="registation">𝓕𝓸𝓻𝓰𝓸𝓽 𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
