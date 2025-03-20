// used in Shop page to display products in a grid

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlist = (e) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-actions">
          <button className="action-button" onClick={handleAddToCart}>
            <FaShoppingCart /> Add to Cart
          </button>
          <button 
            className={`action-button wishlist ${isInWishlist(product.id) ? 'active' : ''}`}
            onClick={handleWishlist}
          >
            <FaHeart />
          </button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-name">
          <h3>{product.name}</h3>
        </div>
        <div className="product-price">
          <span className="current-price">KSH {product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="old-price">KSH {product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        {product.rating && (
          <div className="product-rating">
            {/* Add rating stars here */}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;