import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="content-wrapper">
                <div className="section-container">
                    <h1 className="home-title">Welcome to Agro E-Commerce</h1>
                    <p className="home-description">
                        This platform connects farmers directly with consumers, making it easier to purchase fresh produce straight from the source.
                    </p>
                </div>

                <div className="section-container">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-content">
                        Farmers can easily register and list their products, while consumers can browse and purchase the freshest produce at their convenience.
                    </p>
                </div>

                <div className="section-container">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <ul className="feature-list">
                        <li className="feature-item">🌾 Direct connection between farmers and consumers.</li>
                        <li className="feature-item">💰 Fair prices for both farmers and consumers.</li>
                        <li className="feature-item">🍅 Fresh, locally-sourced produce delivered to your doorstep.</li>
                        <li className="feature-item">📦 Convenient, hassle-free shopping experience.</li>
                        <li className="feature-item">🌍 Support local communities and sustainable farming.</li>
                    </ul>
                </div>

                <div className="section-container">
                    <h2 className="section-title">Get Started</h2>
                    <p className="section-content">
                        Join our community today! Whether you're a farmer looking to sell your products or a consumer looking for fresh, affordable produce, Agro E-Commerce has you covered.
                    </p>
                    <p className="section-content">
                        <strong>Farmers:</strong> Register now and start selling your products to local buyers.
                    </p>
                    <p className="section-content">
                        <strong>Consumers:</strong> Browse our selection of fresh goods and have them delivered directly to your door.
                    </p>
                </div>
            </div>

            <footer className="footer">
                <p>© 2024 Agro E-Commerce. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
