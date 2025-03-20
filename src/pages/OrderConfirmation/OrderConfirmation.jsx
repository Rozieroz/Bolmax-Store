import React from 'react';
import { Link } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="order-confirmation">
      <div className="confirmation-content">
        <h1>Thank You for Your Order!</h1>
        <div className="order-details">
          <p className="order-number">Order Number: #{orderNumber}</p>
          <p>We have received your order and will begin processing it shortly.</p>
          <p>A confirmation email has been sent to your email address.</p>
          
          {/* Show different messages based on payment method */}
          <div className="payment-instructions">
            <h3>Payment Instructions:</h3>
            <p>For M-PESA payments:</p>
            <ol>
              <li>Go to M-PESA menu</li>
              <li>Select Pay Bill</li>
              <li>Enter Business Number: XXXXX</li>
              <li>Enter Account Number: {orderNumber}</li>
              <li>Enter Amount: KSH {/* Add total amount */}</li>
              <li>Enter your M-PESA PIN</li>
            </ol>
            <p>For Cash on Delivery:</p>
            <p>Please have the exact amount ready when the delivery arrives.</p>
          </div>
        </div>
        <div className="confirmation-actions">
          <Link to="/" className="home-button">Return to Home</Link>
          <Link to="/shop" className="shop-button">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;