import React, { useState } from 'react';
import '../styles/BuyerPage.css';

const BuyerPage = ({ products, onAddToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    // Filtered products based on selected category
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="buyer-page">
            <h1 className="page-title">Available Products</h1>

            {/* Category filter buttons */}
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
            </div>

            {/* Display products grouped by category */}
            {Object.keys(groupedProducts).map((category) => (
                <div key={category} className="category-section">
                    <h2 className="category-title">
                        {category.charAt(0).toUpperCase() + category.slice(1)}s
                    </h2>
                    <ul className="product-list">
                        {filteredProducts
                            .filter((product) => product.category === category)
                            .map((product) => (
                                <li key={product.id} className="product-card">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.productName}
                                        className="product-image"
                                    />
                                    <div className="product-details">
                                        <h4 className="product-name">{product.productName}</h4>
                                        <p className="product-price">
                                            Price: ${product.pricePerUnit} per {product.unit}
                                        </p>
                                        <p className="product-quantity">
                                            Available: {product.quantity} {product.unit}
                                        </p>
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
                </div>
            ))}

            {/* Display a message if no products are available */}
            {filteredProducts.length === 0 && (
                <p className="no-products-message">No products available in this category.</p>
            )}
        </div>
    );
};

export default BuyerPage;
