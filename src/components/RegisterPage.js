import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        
        // Get existing users from localStorage or initialize an empty array if none
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if the user with this email already exists
        const userExists = users.find(u => u.email === email);

        if (userExists) {
            alert('User already exists!');
        } else {
            // Create new user object with all details
            const newUser = { username, lastname, email, password };
            users.push(newUser);
            
            // Store updated users array in localStorage
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
            navigate('/login');
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
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
        </div>
    );
};

export default RegisterPage;
