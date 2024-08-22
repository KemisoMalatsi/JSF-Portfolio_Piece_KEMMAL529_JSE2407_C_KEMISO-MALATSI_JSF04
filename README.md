# E-Commerce Website

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Contributing](#contributing)


## Introduction

Welcome to the E-Commerce Website project, SwiftCart! This project is a fully functional e-commerce web application that allows users to browse products, view detailed information about each product, filter and sort products, and maintain their preferences during navigation. All data is fetched from a fake API to ensure dynamic content.

## Technologies Used

- **Frontend Framework:** Vue 3
- **State Management:** Vuex
- **Routing:** Vue Router
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **API Calls:** Fetch API

## Features

- **Product Grid:** Displays a grid of product cards.
- **Product Details:** Users can view detailed information about each product.
- **Category Filtering:** Filter products by category.
- **Price Sorting:** Sort products by price (low to high, high to low).
- **Persisted State:** Filters and sorting preferences are maintained during navigation.
- **Loading States:** Visual indicators during data fetching.

## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/KemisoMalatsi/Module_4_KEMMAL529_JSE2401_C_Kemiso-Malatsi_JSF03.git
    cd Module_4_KEMMAL529_JSE2401_C_Kemiso-Malatsi_JSF03
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Configure Environment Variables:**
    - Create a `.env` file in the root directory.
    - Add the necessary environment variables. For example:
      ```env
      VITE_API_BASE_URL=https://fakestoreapi.com
      ```

4. **Run the Development Server:**
    ```bash
    npm run dev
    ```

5. **Build for Production:**
    ```bash
    npm run build
    ```

## Usage

Once the development server is running, you can access the application at `http://localhost:5173/` (or the port specified in your configuration).

### Browsing Products

- **Grid View:** Browse a grid of products with images, titles, prices, and categories.
- **Detailed View:** Click on a product to view detailed information, including a description, ratings, and reviews.

### Filtering and Sorting

- **Filter by Category:** Use the category filter to view products from specific categories.
- **Sort by Price:** Use the sorting options to sort products by price, either from low to high or high to low.
- **Reset Filters and Sorting:** Easily reset to default view without refreshing the page.

### Loading States

- **Initial Load:** A loading indicator is shown while initial data is being fetched.
- **Data Fetching:** A loading indicator is shown when new data is being fetched.

## Contributing

We welcome contributions! To contribute:

1. **Fork the Repository**
2. **Create a New Branch:**
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make Your Changes**
4. **Commit Your Changes:**
    ```bash
    git commit -m 'Add some feature'
    ```
5. **Push to the Branch:**
    ```bash
    git push origin feature/your-feature-name
    ```
6. **Open a Pull Request**

## Links

1. [https://jsf-portfolio-piece-kemmal-5-git-d5475e-kemisomalatsis-projects.vercel.app/](#Vercel)
2. [https://youtu.be/4xsm2LnT12Y](#YouTube)
