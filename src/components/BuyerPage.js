import React from 'react';

const BuyerPage = ({ products, onAddToCart }) => {
    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <div className="buyer-page">
            <h1>Available Products</h1>
            {Object.keys(groupedProducts).map((category) => (
                <div key={category} className="category-section">
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)}s</h2>
                    <ol className="product-list">
                        {groupedProducts[category].map((product) => (
                            <li key={product.id} className="product-card">
                                <img src={product.imageUrl} alt={product.productName} />
                                <h4>{product.productName}</h4>
                                <p>Price: ${product.pricePerUnit} per {product.unit}</p>
                                <p>Available: {product.quantity} {product.unit}</p>
                                <p>Description: {product.description}</p>
                                <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
};

export default BuyerPage;
