import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes, FaHeart, FaClipboardList } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './navbar.css';
import logo from '../../assets/logoBolmax.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((total, item) => total + (item?.quantity || 0), 0) || 0;

  const handleSearchInput = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    
    if (value.length > 2) {
      setSuggestions([])
    } else {
      setSuggestions([])
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`)
      setSearchTerm('')
      setSuggestions([])
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar_content') && !e.target.closest('.navbar_mobile_toggle')) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setSuggestions([])
    setIsMobileMenuOpen(false)
  }, [navigate])

  return (
    <nav className="navbar">
      <div className="navbar_mobile_toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className="navbar_logo_section">
        <div className="navbar_logo">
          <Link to="/">
            <img src={logo} alt="Bolmax Logo" />
          </Link>
        </div>
        
        <div className="navbar_actions_mobile">
          <Link to="/wishlist" className="action_item">
            <div className="wishlist-icon-container">
              <FaHeart className="wishlist-icon" />
              {wishlistItems.length > 0 && (
                <span className="wishlist-count">{wishlistItems.length}</span>
              )}
            </div>
          </Link>
          <Link to="/cart" className="action_item">
            <div className="cart-icon-container">
              <FaShoppingCart className="cart-icon" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
          </Link>
          <Link to="/orders" className="action_item">
            <div className="order-icon-container">
              <FaClipboardList className="order-icon" />
            </div>
          </Link>
          <Link to="/account" className="action_item">
            <FaUser className="user-icon" />
          </Link>
        </div>
      </div>

      <div className={`navbar_content ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="navbar_search_section">
          <form onSubmit={handleSearch} className="search_form">
            <div className="search_container">
              <input 
                type="text" 
                placeholder="Search products..."
                className="search_input"
                value={searchTerm}
                onChange={handleSearchInput}
                aria-label="Search products"
              />
              <button type="submit" className="search_button" aria-label="Search">
                <FaSearch />
              </button>
              {suggestions.length > 0 && (
                <div className="search_suggestions">
                  {suggestions.map((item, index) => (
                    <div 
                      key={index}
                      className="suggestion_item"
                      onClick={() => {
                        navigate(`/search?q=${encodeURIComponent(item)}`)
                        setSearchTerm('')
                        setSuggestions([])
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <FaSearch className="suggestion_icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="mobile_categories">
          <div className="category-item">
            <Link to="/category/kitchen-appliances">Kitchen & Small Appliances</Link>
          </div>
          <div className="category-item">
            <Link to="/category/electronics">TVs & Electronics</Link>
          </div>
          <div className="category-item">
            <Link to="/category/appliances">Home Appliances</Link>
          </div>
          <div className="category-item">
            <Link to="/category/home-living">Home & Living</Link>
          </div>
          <div className="category-item">
            <Link to="/category/lighting-outdoor">Lighting & Outdoor</Link>
          </div>
          <div className="category-item">
            <Link to="/category/computing">Computing & Accessories</Link>
          </div>
          <div className="category-item">
            <Link to="/category/fashion">Fashion & Clothing</Link>
          </div>
          <div className="category-item">
            <Link to="/category/brands">Top Brands</Link>
          </div>
        </div>

        <ul className="navbar_menu">
          <Link to="/wishlist" className="action_item">
            <div className="wishlist-icon-container">
              <FaHeart className="wishlist-icon" />
              {wishlistItems.length > 0 && (
                <span className="wishlist-count">{wishlistItems.length}</span>
              )}
            </div>
            <span className="action_label">Wishlist</span>
          </Link>
          <Link to="/cart" className="action_item">
            <div className="cart-icon-container">
              <FaShoppingCart className="cart-icon" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
            <span className="action_label">Cart</span>
          </Link>
          <Link to="/orders" className="action_item">
            <div className="order-icon-container">
              <FaClipboardList className="order-icon" />
            </div>
            <span className="action_label">Orders</span>
          </Link>
          <Link to="/account" className="action_item">
            <FaUser className="user-icon" />
            <span className="action_label">Account</span>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar