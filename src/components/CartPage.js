import React, { useState, useEffect } from 'react';
import '../styles/CartPage.css';

const Cart = ({ cart, products, onRemoveFromCart, onIncrementQuantity, onDecrementQuantity, onBuy }) => {
    const [totalAmount, setTotalAmount] = useState(0);

    // Effect hook to update total amount whenever the cart changes
    useEffect(() => {
        // Calculate total amount based on individual cart items
        const newTotalAmount = cart.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);
        setTotalAmount(newTotalAmount);
    }, [cart]); // Recalculate total whenever cart changes

    // Get available quantity for each item from products
    const getAvailableQuantity = (cartItemId) => {
        const product = products.find((prod) => prod.productName === cartItemId.productName);
        return product ? product.quantity : 0;
    };

    // Handle item removal from the cart
    const handleRemove = (cartId) => {
        if (window.confirm("Are you sure you want to remove this item from the cart?")) {
            onRemoveFromCart(cartId);
        }
    };

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1>Your Cart</h1>
                <div className="cart-list">
                    {cart.map((item, index) => {
                        const availableQuantity = getAvailableQuantity(item);
                        const price = item.pricePerUnit || 0;
    
                        return (
                            <div key={index} className="cart-item">
                                <img src={item.imageUrl} alt={item.productName} />
                                <h4>{item.productName}</h4>
                                <p>Price: ${price.toFixed(2)}</p>
                                <p>Quantity: {item.quantity} (Available: {availableQuantity})</p>
                                {item.purchased ? (
                                    <span className="purchased-label">Purchased</span>
                                ) : (
                                    <>
                                        <button 
                                            onClick={() => onIncrementQuantity(item.cartId)} 
                                            disabled={item.quantity >= availableQuantity || item.purchased}>
                                            +
                                        </button>
                                        <button 
                                            onClick={() => onDecrementQuantity(item.cartId)} 
                                            disabled={item.quantity <= 1 || item.purchased}>
                                            -
                                        </button>
                                        <button 
                                            className="remove-from-cart" 
                                            onClick={() => handleRemove(item.cartId)}>
                                            Remove
                                        </button>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="total-cost">
                    <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
                </div>
                <button 
                    className="buy-button" 
                    onClick={onBuy} 
                    disabled={cart.every(item => item.purchased)}>
                    Buy
                </button>
            </div>
        </div>
    );
    
};

export default Cart;
