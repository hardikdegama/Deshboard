import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all components
import Login from './Component/LoginPage'; 
import RegistrationForm from './Component/Regstation';  // Fixed file name from 'Regstation' to 'RegistrationForm'
import ForgotPasswordPage from './Component/ForgotPassword';
import OTPPage from './Component/OtpPage';
import SetPassword from './Component/SetPassWord';  // Assuming you have this component


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/SetPassWord" element={<SetPassword />} />
        
      </Routes>
    </Router>
  );
};

export default App;
