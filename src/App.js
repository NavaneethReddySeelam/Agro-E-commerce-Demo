import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FarmerPage from './components/FarmerPage.js';
import BuyerPage from './components/BuyerPage.js';
import CartPage from './components/CartPage.js';
import HomePage from './components/HomePage.js';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/RegisterPage.js';
import Navbar from './components/Navbar.js';
import { product_list } from './components/products.jsx';
import './styles.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setProducts(product_list);
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            setIsLoggedIn(true);
            setUserRole(loggedInUser.role);
            // Redirect to respective page based on role
            if (loggedInUser.role === 'buyer') {
                navigate('/buyer');
            } else if (loggedInUser.role === 'farmer') {
                navigate('/farmer');
            }
        }
    }, []);

    // Add product to cart
    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((item) => item.id === product.id && !item.purchased);
            if (existingItemIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...product, cartId: Math.random(), quantity: 1, purchased: false }];
            }
        });
    };

    // Buy the items in the cart
    const handleBuy = () => {
        const alreadyPurchasedItems = cart.filter(item => item.purchased);
        if (alreadyPurchasedItems.length > 0) {
            alert("You have already purchased the following items: " + alreadyPurchasedItems.map(item => item.productName).join(", "));
        }

        const itemsToPurchase = cart.filter(item => !item.purchased);
        if (itemsToPurchase.length > 0) {
            alert("Thank you for your purchase!");
            setCart(cart.map(item => ({ ...item, purchased: true })));
            setTotalAmount(0);
            setProducts(products.map(product => {
                const purchasedItems = cart.filter(item => item.name === product.name && !item.purchased);
                const totalPurchasedQuantity = purchasedItems.reduce((sum, item) => sum + item.quantity, 0);
                return totalPurchasedQuantity > 0
                    ? { ...product, quantity: product.quantity - totalPurchasedQuantity }
                    : product;
            }));
        } else {
            alert("No items left to purchase.");
        }
    };

    // Remove product from cart
    const handleRemoveFromCart = (cartId) => {
        setCart(cart.filter((item) => item.cartId !== cartId));
    };

    // Increment quantity of product in cart
    const handleIncrementQuantity = (cartId) => {
        setCart(cart.map((item) =>
            item.cartId === cartId && !item.purchased ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Decrement quantity of product in cart
    const handleDecrementQuantity = (cartId) => {
        setCart(cart.map((item) =>
            item.cartId === cartId && !item.purchased ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        ));
    };

    // Handle user logout
    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setIsLoggedIn(false);
        setUserRole(null);
        navigate('/'); // Redirect to home page on logout
    };

    return (
        <div className="App">
            <Navbar isLoggedIn={isLoggedIn} role={userRole} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Farmer Page is accessible only to farmers */}
                {userRole === 'farmer' && (
                    <>
                    <Route
                        path="/farmer"
                        element={<FarmerPage products={products} setProducts={setProducts} onAddToCart={handleAddToCart} />}
                    />
                    <Route
                    path="/buyer"
                    element={<BuyerPage products={products} onAddToCart={handleAddToCart} />
                }
                />
                </>
                )}

                {/* Buyer Page is accessible only to buyers */}
                {userRole === 'buyer' && (
                    <Route
                        path="/buyer"
                        element={<BuyerPage products={products} onAddToCart={handleAddToCart} />}
                    />
                )}

                {/* Cart Page accessible to all logged-in users */}
                {isLoggedIn && (
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                cart={cart}
                                products={products}
                                onRemoveFromCart={handleRemoveFromCart}
                                onIncrementQuantity={handleIncrementQuantity}
                                onDecrementQuantity={handleDecrementQuantity}
                                onBuy={handleBuy}
                                totalAmount={totalAmount}
                                setTotalAmount={setTotalAmount}
                            />
                        }
                    />
                )}

                {/* Login Page */}
                <Route
                    path="/login"
                    element={
                        <LoginPage
                            onLoginStatusChange={setIsLoggedIn}
                            onRoleChange={setUserRole}
                            navigate={navigate} // Pass navigate function to handle redirect after login
                        />
                    }
                />

                {/* Register Page */}
                <Route
                    path="/register"
                    element={<RegisterPage onRoleChange={setUserRole} />}
                />
            </Routes>
        </div>
    );
};

export default App;
