import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import { products } from '../data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import { FaMinus, FaPlus, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const navigate = useNavigate(); 
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const currentProduct = products.find(p => p.id === parseInt(id));
    setProduct(currentProduct);

    // Find similar products (same category)
    const similar = products.filter(p => 
      p.id !== currentProduct.id && 
      (p.category === currentProduct.category || p.subcategory === currentProduct.subcategory)
    ).slice(0, 6);
    setSimilarProducts(similar);

    // Handle recently viewed
    const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    if (!viewed.includes(parseInt(id))) {
      const newViewed = [parseInt(id), ...viewed].slice(0, 6);
      localStorage.setItem('recentlyViewed', JSON.stringify(newViewed));
    }
    const recentProducts = products.filter(p => viewed.includes(p.id));
    setRecentlyViewed(recentProducts);
  }, [id]);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity
    });
    navigate('/cart');  // Navigate to cart page after adding item
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleScroll = (direction, sectionId) => {
    const container = document.querySelector(`#${sectionId} .products-scroll`);
    const scrollAmount = 800;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-main">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <button 
            className={`wishlist-button ${isInWishlist(product?.id) ? 'active' : ''}`}
            onClick={handleWishlist}
          >
            <FaHeart />
          </button>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">KSH {product.price.toFixed(2)}</p>
          {product.oldPrice && (
            <p className="old-price">KSH {product.oldPrice.toFixed(2)}</p>
          )}
          <p className="description">{product.description}</p>
          {product.cod && (
            <div className="cod-info">
              <p>Cash on Delivery Available</p>
              <p>Minimum Deposit: KSH {product.minDeposit}</p>
            </div>
          )}
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)} disabled={quantity === 1}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>
              <FaPlus />
            </button>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add {quantity} to Cart - KSH {(product.price * quantity).toFixed(2)}
          </button>
        </div>
      </div>

      <div id="similar" className="similar-products">
        <div className="section-header">
          <h2>Similar Products</h2>
          <div className="scroll-buttons">
            <button 
              className="scroll-btn prev" 
              onClick={() => handleScroll('left', 'similar')}
              aria-label="Scroll left"
            >‹</button>
            <button 
              className="scroll-btn next" 
              onClick={() => handleScroll('right', 'similar')}
              aria-label="Scroll right"
            >›</button>
          </div>
        </div>
        <div className="products-scroll">
          {similarProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {recentlyViewed.length > 0 && (
        <div id="recent" className="recently-viewed">
          <div className="section-header">
            <h2>Recently Viewed</h2>
            <div className="scroll-buttons">
              <button 
                className="scroll-btn prev" 
                onClick={() => handleScroll('left', 'recent')}
                aria-label="Scroll left"
              >‹</button>
              <button 
                className="scroll-btn next" 
                onClick={() => handleScroll('right', 'recent')}
                aria-label="Scroll right"
              >›</button>
            </div>
          </div>
          <div className="products-scroll">
            {recentlyViewed.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;