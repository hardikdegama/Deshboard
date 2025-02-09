import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import './OtpDesign.css';  // Ensure this CSS file is properly linked

const OTPPage = () => {
  const [showForm, setShowForm] = useState(false);  // State to control form visibility
  const [otp, setOtp] = useState("");  // Store the OTP entered by the user
  const [generatedOtp, setGeneratedOtp] = useState("");  // Store the generated OTP
  const [error, setError] = useState("");  // Error message state
  const navigate = useNavigate();  // Initialize useNavigate hook

  useEffect(() => {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);  // Generate random 6-digit OTP
    setGeneratedOtp(otp);  // Store the generated OTP

    console.log("Generated OTP:", otp);  // Log the generated OTP (for testing purposes)

    // After 1 second (for example), show the form
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);  // Delay for showing the form
    
    return () => clearTimeout(timer);  // Cleanup timer on component unmount
  }, []);  // Empty dependency array means this runs once on mount

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent form from refreshing the page

    // Check if the entered OTP matches the generated OTP
    if (otp === generatedOtp.toString()) {
      alert("OTP verified. You can now reset your password.");
      
      // Redirect to the SetPassword page after successful OTP verification
      navigate("/SetPassWord");  // Change '/SetPassWord' to the actual route for the password reset page
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="forgot-password-wrapper">
      {/* Right side image */}
      <div className={`image-container ${showForm ? "hide" : ""}`}>
        <img src="/ForgatPhoto.svg" alt="OTP Verification" />
      </div>

      {/* Left side form */}
      <div className={`form-container ${showForm ? "show" : ""}`}>
        <h1>Enter OTP</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}  // Update otp state when input changes
              required
              maxLength="6"  // Restrict to 6 digits
            />
          </div>
          <button type="submit" className="submit-btn">Verify</button>
        </form>

        {/* Show error message if OTP doesn't match */}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default OTPPage;
