import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/returns">Returns & Refunds</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><Link to="/category/kitchen-appliances">Kitchen Appliances</Link></li>
            <li><Link to="/category/electronics">Electronics</Link></li>
            <li><Link to="/category/home-living">Home & Living</Link></li>
            <li><Link to="/category/lighting-outdoor">Lighting & Outdoor</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><FaPhone /> <a href="tel:+254741823634">+254 741 823 634</a></li> 
            <li><FaEnvelope /> <a href="mailto:info@bolmax.co.ke">bolmaxkenya@gmail.com</a></li>
            <li><FaMapMarkerAlt /> Nairobi, Kenya</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/254741823634" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bolmax Electronics. Designed and Developed by <a href="https://www.linkedin.com/in/rosewabere" target="_blank">Wabere</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;