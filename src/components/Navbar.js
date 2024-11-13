import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/farmer">Farmer Page</Link></li>
                <li><Link to="/buyer">Buyer Page</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                {!isLoggedIn && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
