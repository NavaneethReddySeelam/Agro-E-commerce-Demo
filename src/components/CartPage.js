import React from 'react';
import '../styles/CartPage.css';

const Cart = ({ cart, onRemoveFromCart, onIncrementQuantity, onDecrementQuantity, products }) => {
    // Calculate total amount
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Find the product by name to get its available quantity
    const getAvailableQuantity = (productName) => {
        const product = products.find((prod) => prod.name === productName);
        return product ? product.quantity : 0;
    };

    const handleRemove = (index) => {
        if (window.confirm("Are you sure you want to remove this item from the cart?")) {
            onRemoveFromCart(index);
        }
    };

    const handleBuy = () => {
        alert("Thank you for your purchase!");
        // Optional: Add logic to clear the cart or process the order.
    };

    return (
        <div className="cart-page">
            <div className="content">
                <h1>Your Cart</h1>
                <div className="cart-list">
                    {cart.map((item, index) => {
                        const availableQuantity = getAvailableQuantity(item.name);
                        return (
                            <div key={index} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity} (Available: {availableQuantity})</p>
                                <button onClick={() => onIncrementQuantity(index)} disabled={item.quantity >= availableQuantity}>+</button>
                                <button onClick={() => onDecrementQuantity(index)} disabled={item.quantity <= 1}>-</button>
                                <button onClick={() => handleRemove(index)}>Remove</button>
                            </div>
                        );
                    })}
                </div>
                <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
                <button className="buy-button" onClick={handleBuy}>Buy</button>
            </div>
        </div>
    );
};

export default Cart;
