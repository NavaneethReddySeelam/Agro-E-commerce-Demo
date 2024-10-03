import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FarmerPage from './components/FarmerPage';
import BuyerPage from './components/BuyerPage';
import CartPage from './components/CartPage'; 
import HomePage from './components/HomePage'; 
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './styles.css';

const App = () => {
    const [products, setProducts] = useState([]); // Holds all products
    const [cart, setCart] = useState([]); // Holds products added to the cart
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAddProduct = (product) => {
        setProducts([...products, product]); // Add new product to the products array
    };

    const handleAddToCart = (product) => {
        const cartProduct = cart.find((item) => item.name === product.name);
        if (cartProduct) {
            setCart(cart.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const handleIncrementQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        setCart(updatedCart);
    };

    const handleDecrementQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setCart(updatedCart);
        }
    };

    const handleRemoveFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/farmer">Farmer Page</Link></li>
                    <li><Link to="/buyer">Buyer Page</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    {isLoggedIn ? (
                        <li><button onClick={handleLogout} className="nav-button">Logout</button></li>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/farmer" element={<FarmerPage onAddProduct={handleAddProduct} />} />
                <Route path="/buyer" element={<BuyerPage 
                    products={products} 
                    onAddToCart={handleAddToCart} 
                />} />
                <Route path="/cart" element={<CartPage 
                    cart={cart} 
                    onIncrementQuantity={handleIncrementQuantity}
                    onDecrementQuantity={handleDecrementQuantity}
                    onRemoveFromCart={handleRemoveFromCart}
                    products={products} // Pass products to CartPage
                />} />
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default App;
