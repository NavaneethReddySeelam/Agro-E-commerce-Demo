
# Agriculture E-Commerce Application

This project is a web-based e-commerce platform designed to bridge the gap between farmers and buyers. It enables farmers to showcase and sell their goods directly to consumers, while buyers can browse and purchase products seamlessly. The platform also includes resources such as farming-related videos for farmers.

## Table of Contents
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [How to Run the Application](#how-to-run-the-application)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

This project was bootstrapped with Create React App. Follow the instructions below to get started.

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production, optimizing it for the best performance. The app will be minified, and filenames will include hashes.

### `npm run eject`
This is a one-way operation that provides full control over the build configuration.

## Features

- **Role-Based Navigation**:  
  - **Farmers**:  
    - Add products with details such as name, price, quantity, image, description, and category (e.g., vegetables, fruits, grains).
    - Upload farming-related videos or links for sharing knowledge and best practices.
    - Restricted access: Farmers-only pages like `FarmerPage`.
  - **Buyers**:  
    - View available products categorized for easy navigation.
    - Add items to their cart, manage quantities, and complete purchases.
    - Search products using a search bar and filter items by categories (e.g., Vegetables, Fruits, Grains).
    - Restricted access: Buyers cannot access `FarmerPage`.

- **Permanent Video Resources**: Farming-related videos and resources are stored in a permanent JSX-based structure for easy display and management.

- **Cart Management**: Buyers can view their cart, adjust quantities, and remove items as needed.

- **Authentication**: Role-based login and registration for farmers and buyers.

- **Dynamic Product Management**: Products are dynamically fetched from a structured JSON file for easy updates and scalability.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Spring Boot (if applicable for backend API development)
- **Routing**: React Router
- **Styling**: CSS
- **State Management**: React Hooks
- **Data Storage**: JSON-based structure for dynamic content

## Folder Structure

The project has the following structure:

```
Agro-E-commerce-Demo/
│
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Different pages (FarmerPage, BuyerPage, etc.)
│   ├── styles/           # CSS files for styling
│   ├── data/             # JSON data for products and videos
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point for React
│   └── ...
│
├── public/               # Static assets
│   ├── images/           # Images for products and videos
│   ├── index.html        # HTML template
│   └── ...
│
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
└── ...
```

## How to Run the Application

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/NavaneethReddySeelam/Agro-E-commerce-Demo.git
   ```

2. **Navigate to the project directory**:  
   ```bash
   cd Agro-E-commerce-Demo
   ```

3. **Install dependencies**:  
   ```bash
   npm install
   ```

4. **Start the application**:  
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Contributing

Contributions are welcome! Follow these steps to contribute:  
1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m 'Add feature'`).  
4. Push to the branch (`git push origin feature-name`).  
5. Open a pull request for review.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
