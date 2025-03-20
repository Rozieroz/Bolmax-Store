import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod'
  });

  const shippingRates = {
    nairobi: {
      cbd: 200,
      westlands: 250,
      eastleigh: 300,
      karen: 350,
      langata: 300,
      kilimani: 250,
      parklands: 250
    },
    kiambu: {
      thika: 300,
      ruiru: 300,
      juja: 350,
      kikuyu: 400,
      limuru: 450
    },
    machakos: {
      athi: 500,
      mlolongo: 400,
      kathiani: 600,
      kangundo: 700
    },
    kajiado: {
      kitengela: 400,
      ongata: 500,
      ngong: 600,
      kiserian: 650
    }
  };

  const subtotal = cartItems.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  );
  
  const shipping = selectedArea ? shippingRates[selectedCity][selectedArea] : 0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    if (e.target.name === 'phone') {
      // Remove any non-digit characters except '+'
      let value = e.target.value.replace(/[^\d+]/g, '');
      
      // Ensure it starts with +254
      if (!value.startsWith('+254')) {
        value = '+254' + value.replace(/^\+254/, '');
      }
      
      // Limit total length to 12 (+254 + 9 digits)
      value = value.slice(0, 13);
      
      setFormData({
        ...formData,
        phone: value
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCity || !selectedArea) {
      alert('Please select your delivery location');
      return;
    }
    if (!formData.address.trim()) {
      alert('Please provide a detailed delivery address');
      return;
    }
    if (!formData.phone.trim()) {
      alert('Please provide a valid phone number');
      return;
    }
    console.log('Order submitted:', { 
      items: cartItems, 
      customer: formData, 
      shipping: {
        city: selectedCity,
        area: selectedArea,
        cost: shipping
      },
      total 
    });
    navigate('/order-confirmation');
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-checkout">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/shop')}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-content">
        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                pattern="\+254[0-9]{9}"
                placeholder="+254XXXXXXXXX"
                minLength="13"
                maxLength="13"
              />
              <small className="form-hint">Format: +254XXXXXXXXX</small>
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter detailed delivery address"
                minLength="10"
              />
            </div>

            <div className="shipping-selector">
              <label htmlFor="city">Select City: *</label>
              <select 
                id="city" 
                value={selectedCity} 
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedArea('');
                }}
                required
              >
                <option value="">Select a city</option>
                {Object.keys(shippingRates).map(city => (
                  <option key={city} value={city}>
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </option>
                ))}
              </select>

              {selectedCity && (
                <>
                  <label htmlFor="area">Select Area: *</label>
                  <select
                    id="area"
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    required
                  >
                    <option value="">Select an area</option>
                    {Object.entries(shippingRates[selectedCity]).map(([area, rate]) => (
                      <option key={area} value={area}>
                        {area.charAt(0).toUpperCase() + area.slice(1)} (KSH {rate})
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <div className="payment-options">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                  />
                  Cash on Delivery
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={formData.paymentMethod === 'mpesa'}
                    onChange={handleInputChange}
                  />
                  M-PESA
                </label>
              </div>
            </div>

            <button type="submit" className="checkout-button">
              Place Order - KSH {total.toFixed(2)}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>KSH {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>KSH {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{selectedArea ? `KSH ${shipping.toFixed(2)}` : 'Select location'}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>KSH {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;