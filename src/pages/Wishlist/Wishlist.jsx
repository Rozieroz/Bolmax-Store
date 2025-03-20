import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty</p>
          <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map(item => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">KSH {item.price.toFixed(2)}</p>
              </div>
              <div className="item-actions">
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;