import React, { useState } from 'react';
import '../styles/BuyerPage.css';

const BuyerPage = ({ products, onAddToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter((product) => product.category.toLowerCase() === selectedCategory);

    return (
        <div className="buyer-page">
            <h1 className="page-title">Available Products</h1>

            <div className="filter-buttons">
                <button
                    className={selectedCategory === 'all' ? 'active' : ''}
                    onClick={() => setSelectedCategory('all')}
                >
                    All
                </button>
                <button
                    className={selectedCategory === 'vegetable' ? 'active' : ''}
                    onClick={() => setSelectedCategory('vegetable')}
                >
                    Vegetables
                </button>
                <button
                    className={selectedCategory === 'fruit' ? 'active' : ''}
                    onClick={() => setSelectedCategory('fruit')}
                >
                    Fruits
                </button>
                <button
                    className={selectedCategory === 'grains' ? 'active' : ''}
                    onClick={() => setSelectedCategory('grains')}
                >
                    Grains
                </button>
                <button
                    className={selectedCategory === 'spices' ? 'active' : ''}
                    onClick={() => setSelectedCategory('spices')}
                >
                    Spices
                </button>
                <button
                    className={selectedCategory === 'organicproducts' ? 'active' : ''}
                    onClick={() => setSelectedCategory('organicproducts')}
                >
                    Organic Products
                </button>
            </div>

            {filteredProducts.length > 0 ? (
                <ul className="product-list">
                    {filteredProducts.map((product) => (
                        <li key={product.id} className="product-card">
                            <img src={product.imageUrl} alt={product.productName} className="product-image" />
                            <div className="product-details">
                                <h4 className="product-name">{product.productName}</h4>
                                <p className="product-price">Price: ${product.pricePerUnit} per {product.unit}</p>
                                <p className="product-quantity">Available: {product.quantity} {product.unit}</p>
                                <p className="product-description">{product.description}</p>
                            </div>
                            <button
                                onClick={() => onAddToCart(product)}
                                className={product.quantity > 0 ? "add-to-cart" : "sold-out"}
                                disabled={product.quantity <= 0}
                            >
                                {product.quantity > 0 ? "Add to Cart" : "Sold Out"}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-products-message">No products available in this category.</p>
            )}
        </div>
    );
};

export default BuyerPage;
