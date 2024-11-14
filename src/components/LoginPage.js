import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLoginStatusChange, onRoleChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Clear any previous error message
        setErrorMessage('');

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Store logged-in user data in localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            
            // Update the login status and role
            onLoginStatusChange(true);
            onRoleChange(user.role);
            
            // Redirect based on user role
            if (user.role === 'buyer') {
                navigate('/buyer');  // Redirect to Buyer Page
            } else if (user.role === 'farmer') {
                navigate('/buyer');  // Redirect to Buyer Page for Farmer as well
            }
        } else {
            // Display error if login fails
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}  {/* Show error message if any */}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
