import React from 'react';
import { Link } from 'react-router-dom';
import './OrderHistory.css';

const OrderHistory = () => {
  // This would typically come from a database
  const orders = [
    {
      id: '123ABC',
      date: '2024-01-20',
      status: 'Delivered',
      total: 2500,
      items: [
        { name: 'Product 1', quantity: 2, price: 1000 },
        { name: 'Product 2', quantity: 1, price: 500 }
      ],
      shipping: {
        address: '123 Street, Westlands',
        cost: 250
      }
    }
    // More orders would be listed here
  ];

  return (
    <div className="order-history">
      <h1>My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <Link to="/shop" className="shop-button">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div>
                  <h3>Order #{order.id}</h3>
                  <p className="order-date">{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>KSH {item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="order-footer">
                <div className="order-totals">
                  <div className="total-row">
                    <span>Subtotal:</span>
                    <span>KSH {(order.total - order.shipping.cost).toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Shipping:</span>
                    <span>KSH {order.shipping.cost.toFixed(2)}</span>
                  </div>
                  <div className="total-row total">
                    <span>Total:</span>
                    <span>KSH {order.total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="order-actions">
                  <button className="track-button">Track Order</button>
                  <button className="reorder-button">Reorder</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;