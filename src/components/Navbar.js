import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, role, onLogout }) => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>

                {/* For logged-in farmers and buyers */}
                {isLoggedIn && (role === 'farmer' || role === 'buyer') && (
                    <li><Link to="/buyer">Buyer Page</Link></li>
                )}

                {/* For logged-in farmers */}
                {isLoggedIn && role === 'farmer' && (
                    <li><Link to="/farmer">Farmer Page</Link></li>
                )}

                {/* Cart and Logout for logged-in users */}
                {isLoggedIn && (
                    <>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><button onClick={onLogout}>Logout</button></li>
                    </>
                )}

                {/* For logged-out users */}
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
