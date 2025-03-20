import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  );
  
  const total = subtotal;

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">KSH {item.price.toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <FaPlus />
                  </button>
                </div>
                <p className="item-total">
                  KSH {(item.price * item.quantity).toFixed(2)}
                </p>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>KSH {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>KSH {total.toFixed(2)}</span>
            </div>
            <button 
              className="checkout-button"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>
            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;