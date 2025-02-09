import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistationDesign.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate phone and email
    if (!validatePhone(phoneNumber)) {
      alert('Please enter a valid phone number');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Check if any user with the same username, phone number, or email already exists
    const existingData = JSON.parse(localStorage.getItem('users')) || [];

    // Check for duplicate data
    const isDuplicate = existingData.some(user => 
      user.username === username || user.phoneNumber === phoneNumber || user.email === email
    );

    if (isDuplicate) {
      alert('A user with the same username, phone number, or email already exists. Please choose different details.');
      return;
    }

    // Check if passwords match
    if (password === confirmPassword) {
      const userData = { username, phoneNumber, email, dob, password };

      // Add new user to the existing data in local storage
      existingData.push(userData);
      localStorage.setItem('users', JSON.stringify(existingData));

      setRegistrationSuccess(true);

      // Reset form fields
      setUsername('');
      setPhoneNumber('');
      setEmail('');
      setDob('');
      setPassword('');
      setConfirmPassword('');

      // Redirect to the login page after successful registration
      setTimeout(() => {
        navigate('/'); // This will navigate to the login page
      }, 2000); // Optional delay before redirecting
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="login-container">
      <div className="image-side">
        <img src="/rgisitation.jpg" alt="Registration" />
      </div>
      <div className="form-side">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="form-button">Register</button>
          {registrationSuccess && <p className="success-message">Registration successful! Redirecting to login...</p>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
