import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/LoginPage';
import RegistrationForm from './Component/Regstation';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
};

export default App;
