import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('buyer'); // Default role is 'buyer'
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Enforce minimum password length
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Check if the email already exists in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find((u) => u.email === email);

        if (userExists) {
            alert('User already exists!');
        } else {
            const newUser = { username, lastname, email, password, role };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
            navigate('/login'); // Redirect to login page after successful registration
        }
    };

    return (
        <div className="register-page">
            <div className="content">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-field">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="show-password-btn"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    
                    {/* Role selection for user */}
                    <div className="role-selection">
                        <label>Role:</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="buyer">Buyer</option>
                            <option value="farmer">Farmer</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="register-btn">Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;
