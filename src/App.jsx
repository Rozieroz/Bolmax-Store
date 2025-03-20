import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { Link } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart/Cart';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import './App.css'
import './styles/colors.css';


import { WishlistProvider } from './context/WishlistContext';
import Wishlist from './pages/Wishlist/Wishlist';
import Checkout from './pages/Checkout/Checkout';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';
import OrderHistory from './pages/OrderHistory/OrderHistory';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>  {/* wraps your entire app with routing functionality */}
          <ScrollToTop /> {/* to take the user to top of every page */}
          {/* Promotional Banner at the very top */}
          <div className="promo-banner">
            <Link to="/Shop">
              🎉 Save More on Your Shoping: Shop Now →
            </Link>
            <div className="contact-info">
              <span>📞 Call us: </span>
              <a href="tel:+254-741-823-634">+254-741-823-634</a>
            </div>
          </div>
          
          <div className="app">
            <Navbar /> {/* Navbar appears on all pages */}
            <main className="main-content">
              <Routes>
                {/* Each Route defines a different page/path */}
                <Route path="/" element={<Home />} />          {/* Homepage */}
                <Route path="/shop" element={<Shop />} />      {/* Shop page */}
                <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Category page */}
                <Route path="/category/:categoryName/*" element={<CategoryPage />} /> {/* Category page */}
                <Route path="/category/kitchen/:categoryName" element={<CategoryPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/orders" element={<OrderHistory />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
