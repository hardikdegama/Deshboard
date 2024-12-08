import React, { useState } from 'react';
import './RegistationDesign.css'; // CSS file for registration styling

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            const userData = { username, phoneNumber, email, dob, password };
            const existingData = JSON.parse(localStorage.getItem('users')) || [];
            existingData.push(userData);
            localStorage.setItem('users', JSON.stringify(existingData));
            setRegistrationSuccess(true);
            setUsername('');
            setPhoneNumber('');
            setEmail('');
            setDob('');
            setPassword('');
            setConfirmPassword('');
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src="/reg.jpg" alt="Registration" className="image" />
            </div>
            <div className="form-container">
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label className="label">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        required
                    />
                    <label className="label">Phone Number:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="input"
                        required
                    />
                    <label className="label">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        required
                    />
                    <label className="label">Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="input"
                        required
                    />
                    <label className="label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        required
                    />
                    <label className="label">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input"
                        required
                    />
                    <button type="submit" className="button">Register</button>
                    {registrationSuccess && <p className="success-message">Registration successful!</p>}
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
