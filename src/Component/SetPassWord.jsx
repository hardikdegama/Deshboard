import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SetPassword.css'; // Ensure the CSS file is correctly linked

const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both passwords match
    if (password === confirmPassword) {
      // Retrieve the stored email (which should be stored during the OTP phase)
      const resetEmail = localStorage.getItem('resetEmail');
      if (resetEmail) {
        // Retrieve the users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Find the user whose email matches the resetEmail
        const userIndex = storedUsers.findIndex(user => user.email === resetEmail);

        if (userIndex !== -1) {
          // Update the user's password
          storedUsers[userIndex].password = password;

          // Save the updated users back to localStorage
          localStorage.setItem('users', JSON.stringify(storedUsers));

          // Optional: Clear the resetEmail after updating the password
          localStorage.removeItem('resetEmail');

          // Redirect to the login page after the password is changed
          navigate('/');  // Redirect to the Login page (root path)
        } else {
          setError('User not found');
        }
      } else {
        setError('No email found. Please try again.');
      }
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div className="set-password-wrapper">
      {/* Left Side Form */}
      <div className="set-password-form-container">
        <h2>Set Your Password</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Enter Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="set-password-image-container">
        <img src="/Change Password.jpg" alt="Set Password" />  {/* Replace with actual image path */}
      </div>
    </div>
  );
};

export default SetPassword;
