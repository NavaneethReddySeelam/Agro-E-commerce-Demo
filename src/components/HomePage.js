import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="content-wrapper">
                <div className="section-container">
                    <h1 className="home-title">Welcome to Agro E-Commerce</h1>
                    <p className="home-description">
                        Agro E-Commerce is a dedicated platform connecting farmers directly with consumers, enabling easy access to fresh, locally-sourced produce. Our mission is to support sustainable farming while delivering fresh products to consumers’ doorsteps.
                    </p>
                </div>

                <div className="section-container">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-content">
                        Our platform offers an intuitive interface for both farmers and buyers:
                    </p>
                    <ul className="feature-list">
                        <li className="feature-item">🌾 <strong>For Farmers:</strong> Farmers can easily register, upload their produce, and set prices directly, providing them control over their sales.</li>
                        <li className="feature-item">🛒 <strong>For Consumers:</strong> Consumers can browse various categories, choose fresh produce, and order directly from farmers.</li>
                        <li className="feature-item">🚚 <strong>Delivery:</strong> Orders are fulfilled through a reliable delivery network to ensure timely arrival of fresh goods.</li>
                    </ul>
                </div>

                <div className="section-container">
                    <h2 className="section-title">Explore Categories</h2>
                    <p className="section-content">
                        Our platform features a variety of fresh produce categories. Explore our sections to find what suits your needs best:
                    </p>
                    <ul className="feature-list">
                        <li className="feature-item">🍅 <strong>Vegetables:</strong> Fresh seasonal vegetables directly from farms.</li>
                        <li className="feature-item">🍎 <strong>Fruits:</strong> Juicy and ripe fruits picked fresh.</li>
                        <li className="feature-item">🌾 <strong>Grains:</strong> Quality grains including rice, wheat, and pulses.</li>
                        <li className="feature-item">🧄 <strong>Spices:</strong> Aromatic spices to add flavor to your cooking.</li>
                        <li className="feature-item">🍯 <strong>Other Organic Products:</strong> Honey, jams, and other organic products.</li>
                    </ul>
                </div>

                <div className="section-container">
                    <h2 className="section-title">Why Choose Agro E-Commerce?</h2>
                    <ul className="feature-list">
                        <li className="feature-item">🌍 Supporting local communities and sustainable agriculture practices.</li>
                        <li className="feature-item">💰 Transparent and fair pricing for both farmers and consumers.</li>
                        <li className="feature-item">🍀 Fresh, organic produce that you can trust.</li>
                        <li className="feature-item">📦 Convenient and hassle-free delivery options.</li>
                    </ul>
                </div>

                <div className="section-container">
                    <h2 className="section-title">Videos and Resources</h2>
                    <p className="section-content">
                        Watch videos from farmers and experts sharing insights on sustainable farming practices, produce quality, and more:
                    </p>
                    <div className="video-gallery">
                        <div className="video-item">
                            <iframe 
                                src="https://www.youtube.com/embed/sample-video-1" 
                                title="Introduction to Agro E-Commerce"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                            ></iframe>
                            <p>Introduction to Agro E-Commerce</p>
                        </div>
                        <div className="video-item">
                            <iframe 
                                src="https://www.youtube.com/embed/sample-video-2" 
                                title="Sustainable Farming Practices"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                            ></iframe>
                            <p>Sustainable Farming Practices</p>
                        </div>
                        <div className="video-item">
                            <iframe 
                                src="https://www.youtube.com/embed/sample-video-3" 
                                title="How to Choose Fresh Produce"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                            ></iframe>
                            <p>How to Choose Fresh Produce</p>
                        </div>
                    </div>
                </div>

                <div className="section-container">
                    <h2 className="section-title">Get Started</h2>
                    <p className="section-content">
                        Join the Agro E-Commerce community today! Whether you're a farmer looking to reach more customers or a consumer seeking fresh, quality produce, our platform is here for you.
                    </p>
                    <p className="section-content">
                        <strong>Farmers:</strong> Register to start listing and selling your products directly to local consumers.
                    </p>
                    <p className="section-content">
                        <strong>Consumers:</strong> Explore our categories and enjoy fresh produce delivered straight to your door.
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
