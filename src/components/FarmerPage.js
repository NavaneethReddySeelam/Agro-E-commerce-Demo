import React, { useState } from 'react';
import '../styles/FarmerPage.css';

const FarmerPage = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('vegetable'); // New state for category

    const addProduct = () => {
        if (!name || !price || !quantity || !imageUrl) return; // Validate inputs
        const newProduct = { name, price, quantity, imageUrl, description, category }; // Include category
        onAddProduct(newProduct); // Call the passed function to add the product
        // Clear input fields
        setName('');
        setPrice('');
        setQuantity('');
        setImageUrl('');
        setDescription('');
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button className="add-product" onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default FarmerPage;
