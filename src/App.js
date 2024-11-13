import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FarmerPage from './components/FarmerPage';
import BuyerPage from './components/BuyerPage';
import Cart from './components/CartPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Navbar from './components/Navbar';
import { product_list } from './components/products';
import './styles.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        setProducts(product_list)
    },[])


    const handleAddToCart = (product) => {
        const cartProduct = cart.find((item) => item.name === product.name);
        if (cartProduct) {
            setCart(cart.map((item) =>
                item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const handleIncrementQuantity = (index) => {
        setCart(cart.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecrementQuantity = (index) => {
        setCart(cart.map((item, i) =>
            i === index ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        ));
    };

    return (
        <Router>
            <div className="App">
                <Navbar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/farmer" element={<FarmerPage products={products} setProducts={setProducts} />} />
                    <Route path="/buyer" element={<BuyerPage products={products} onAddToCart={handleAddToCart} />} />
                    <Route path="/cart" element={
                        <Cart
                            cart={cart}
                            products={products}
                            onRemoveFromCart={handleRemoveFromCart}
                            onIncrementQuantity={handleIncrementQuantity}
                            onDecrementQuantity={handleDecrementQuantity}
                        />
                    } />
                    <Route path="/login" element={<LoginPage onLoginStatusChange={setIsLoggedIn} />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
