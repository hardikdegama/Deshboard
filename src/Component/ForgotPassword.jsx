import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPasswordDesign.css'; // Make sure the CSS file is properly linked

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered email exists in localStorage
    const userExists = storedUsers.some(user => user.email === email);

    if (userExists) {
      // If email exists, store the email and show success message
      localStorage.setItem('resetEmail', email);  // Store the email for reset
      setEmailSent(true); // Show confirmation message

      // Redirect to OTP page after a short delay
      setTimeout(() => {
        navigate("/otp"); // Redirect to OTP page
      }, 2000); // Optional delay before redirecting
    } else {
      // If email doesn't exist, show error message
      setError('No account found with that email. Please check and try again.');
      setEmailSent(false);  // Ensure success message is not shown
    }
  };

  return (
    <div className="forgot-password-wrapper">
      {/* Left side form */}
      <div className="form-container">
        <h1>Reset Your Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {emailSent && (
          <p className="success-message">Email sent successfully! Redirecting...</p>
        )}

        {error && (
          <p className="error-message">{error}</p> // Display error message if email doesn't exist
        )}
      </div>

      {/* Right side image */}
      <div className="image-container">
        <img src="/forgotpass.jpg" alt="Forgot Password" />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
