import React, { useState } from 'react';
import '../styles/FarmerPage.css';

const FarmerPage = ({ products, setProducts }) => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('vegetable');
    const [quantity, setQuantity] = useState('');
    const [pricePerUnit, setPricePerUnit] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    const handleAddProduct = () => {
        if (!productName || !quantity || !pricePerUnit || !imageUrl) {
            alert("Please fill out all fields!");
            return;
        }

        const newProduct = {
            id: Date.now(),
            productName,
            category,
            quantity: parseInt(quantity),
            pricePerUnit: parseFloat(pricePerUnit),
            imageUrl,
            description
        };

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts); // Update global product state
        setProductName('');
        setQuantity('');
        setPricePerUnit('');
        setImageUrl('');
        setDescription('');
    };

    return (
        <div className="farmer-page">
            <h1>Add Products</h1>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
                <option value="grains">Grains</option>
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
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default FarmerPage;
