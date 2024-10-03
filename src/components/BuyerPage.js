import React from 'react';
import '../styles/BuyerPage.css';

const BuyerPage = ({ products, onAddToCart }) => {
    return (
        <div className="buyer-page">
            <div className="content">
                <h1>Available Products</h1>

                {/* Render products grouped by category */}
                {['vegetable', 'fruit', 'others'].map((category) => (
                    <div key={category}>
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1) + 's'}</h2>
                        <div className="product-list">
                            {products.filter(product => product.category === category).length > 0 ? (
                                products.filter(product => product.category === category).map((product, index) => (
                                    <div key={index} className="product-item">
                                        <img src={product.imageUrl} alt={product.name} />
                                        <h3>{product.name}</h3>
                                        <p>Price: ${product.price}</p>
                                        <p>Quantity: {product.quantity}</p>
                                        <p>{product.description}</p>
                                        <button className="add-to-cart" onClick={() => onAddToCart(product)}>Add to Cart</button>
                                    </div>
                                ))
                            ) : (
                                <p>No {category}s available.</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuyerPage;
