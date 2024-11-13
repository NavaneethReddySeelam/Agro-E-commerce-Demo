import React, { useState, useEffect } from 'react';
import '../styles/FarmerPage.css';

const FarmerPage = () => {
    // States for managing products and form inputs
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('vegetable');  // Default to 'vegetable'
    const [quantity, setQuantity] = useState('');
    const [pricePerUnit, setPricePerUnit] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    // Load products from localStorage when the component mounts
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('farmerProducts')) || [];
        setProducts(savedProducts);
    }, []);

    // Handle adding a new product
    const handleAddProduct = () => {
        if (!productName || !quantity || !pricePerUnit || !imageUrl) return; // Basic validation

        const newProduct = {
            id: Date.now(),
            name: productName,
            category,
            quantity,
            pricePerUnit,
            imageUrl,
            description
        };

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);

        // Save products to localStorage
        localStorage.setItem('farmerProducts', JSON.stringify(updatedProducts));

        // Clear input fields after adding the product
        setProductName('');
        setQuantity('');
        setPricePerUnit('');
        setImageUrl('');
        setDescription('');
    };

    // Save the products permanently (for example, to a database)
    const handleSavePermanent = () => {
        // Logic to save products permanently, such as making an API call
        console.log('Saving products permanently...', products);
    };

    return (
        <div className="farmer-page">
            <div className="content">
                <h1>Add Products</h1>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="vegetable">Vegetable</option>
                    <option value="fruit">Fruit</option>
                    <option value="others">Others</option>
                </select>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price per Unit"
                    value={pricePerUnit}
                    onChange={(e) => setPricePerUnit(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="add-product" onClick={handleAddProduct}>Add Product</button>
                <button onClick={handleSavePermanent}>Save Permanently</button>

                <div className="product-list">
                    <h2>Product List</h2>
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                <div className="product-item">
                                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                                    <div>
                                        <h3>{product.name}</h3>
                                        <p>{product.category}</p>
                                        <p>{product.quantity} {product.category === 'fruit' ? 'dozens' : 'kg'}</p>
                                        <p>${product.pricePerUnit}/unit</p>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FarmerPage;
