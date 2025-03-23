import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'  // Import products data
import ProductCard from '../components/ProductCard/ProductCard' // Import ProductCard component
import './Home.css'

// Import category images
import kitchenImg from '../assets/categories/kitchen-appliances.jpg'
import tvImg from '../assets/categories/TV.jpg'
import appliancesImg from '../assets/categories/washing-machine.jpg'
import homeLivingImg from '../assets/categories/home-living.jpg'
import lightingImg from '../assets/categories/light-bulb-lamp.jpg'
import computingImg from '../assets/categories/laptop.jpg'
import fashionImg from '../assets/categories/fashion.jpg'

//  hero image and gif
import heroImg from '../assets/hero-image.png'
import heroGif from '../assets/hero-animation.gif'

const Home = () => {
  // Logic for featured products - using a combination of factors
  const featuredProducts = products
    .filter(product => {
      // Check for featured criteria
      const hasHighRating = product.rating && product.rating >= 4.5;
      const isPopular = product.reviews && product.reviews > 50;
      const isPromoted = product.featured === true; // If you have a featured flag
      const hasDiscount = product.oldPrice && ((product.oldPrice - product.price) / product.oldPrice) * 100 >= 10;
      
      // Product qualifies if it meets at least two of these conditions
      let qualificationCount = 0;
      if (hasHighRating) qualificationCount++;
      if (isPopular) qualificationCount++;
      if (isPromoted) qualificationCount++;
      if (hasDiscount) qualificationCount++;
      
      return qualificationCount >= 1;
    })
    .slice(0, 8); // Limit to 8 products
 
  // For latest products - creating a set of IDs to avoid repetition
  const latestProducts = products.slice(12, 20);
  const latestProductIds = new Set(latestProducts.map(product => product.id));
  
  // logic for clearance products - using a combination of factors
  const finalClearanceProducts = products
    .filter(product => {
      // Don't include products that are already in latest products
      if (latestProductIds.has(product.id)) return false;
      
      // Check for specific clearance criteria
      const discountPercentage = product.oldPrice ? ((product.oldPrice - product.price) / product.oldPrice) * 100 : 0;
      const isLimitedStock = product.stock && product.stock < 20; // Limited stock check
      const isEndOfSeason = product.seasonal === 'ending'; // If you have seasonal tags
      const isOlderProduct = product.id < 100; // Assuming lower IDs are older products
      
      // Product qualifies if it meets at least one of these conditions with a discount
      return discountPercentage >= 15 && (isLimitedStock || isEndOfSeason || isOlderProduct);
    })
    .slice(0, 8);

  // Fallback if not enough products match our criteria
  const finalSpecialProducts = finalClearanceProducts.length >= 4 ? 
    finalClearanceProducts : 
    products
      .filter(product => !latestProductIds.has(product.id))
      .sort((a, b) => {
        const discountA = a.oldPrice ? ((a.oldPrice - a.price) / a.oldPrice) * 100 : 0;
        const discountB = b.oldPrice ? ((b.oldPrice - b.price) / b.oldPrice) * 100 : 0;
        return discountB - discountA; // Sort by highest discount first
      })
      .slice(0, 8);

  // Scroll handler function
  const handleScroll = (direction, sectionId) => {
    const container = document.querySelector(`#${sectionId} .products-scroll`);
    const scrollAmount = 800; // Adjust this value based on your needs
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="home">
      {/* Categories Bar */}
      <div className="categories-bar">
        
        {/* Kitchen & Small Home Appliances Category */}
        <div className="category-item">
          <Link to="/category/kitchen-appliances">Kitchen & Small Appliances</Link>
          <div className="category-dropdown">

            
            {/* Kitchen Essentials Section */}
            <div className="dropdown-section">
              <h4>Kitchen Essentials</h4>
              <Link to="/category/kitchen/coffee-makers">Coffee Makers</Link>
              <Link to="/category/kitchen/kettles">Kettles</Link>
              <Link to="/category/kitchen/toasters">Toasters</Link>
              <Link to="/category/kitchen/blenders">Blenders</Link>
              <Link to="/category/kitchen/juicers">Juicers</Link>
              <Link to="/category/kitchen/sandwich-makers">Sandwich Makers</Link>
              <Link to="/category/kitchen/waffle-makers">Waffle Makers</Link>
            </div>

            {/* Small Cooking Appliances Section */}
            <div className="dropdown-section">
              <h4>Small Cooking Appliances</h4>
              <Link to="/category/kitchen/ice-cream-maker">Ice Cream Maker</Link>
              <Link to="/category/kitchen/air-fryers">Air Fryers</Link>
              <Link to="/category/kitchen/deep-fryers">Deep Fryers</Link>
              <Link to="/category/kitchen/rice-cookers">Rice Cookers</Link>
              <Link to="/category/kitchen/slow-cookers">Slow Cookers</Link>
              <Link to="/category/kitchen/pressure-cookers">Pressure Cookers</Link>
              <Link to="/category/kitchen/popcorn-poppers">Popcorn Poppers</Link>
              <Link to="/category/kitchen/egg-cookers">Egg Cookers</Link>
              <Link to="/category/kitchen/bbq-grills">Barbecue Grills</Link>
            </div>

            {/* Food Preparation Section */}
            <div className="dropdown-section">
              <h4>Food Preparation</h4>
              <Link to="/category/kitchen/hand-mixers">Hand Mixers</Link>
              <Link to="/category/kitchen/food-processors">Food Processors</Link>
              <Link to="/category/kitchen/choppers-grinders">Food Choppers & Grinders</Link>
              <Link to="/category/kitchen/steamers">Food Steamer</Link>
              <Link to="/category/kitchen/utensils">Kitchen Utensils</Link>
              <Link to="/category/kitchen/hand-blenders">Hand Blenders</Link>
              <Link to="/category/kitchen/meat-mincers">Meat Mincers</Link>
              <Link to="/category/kitchen/stand-mixers">Stand Mixers</Link>
            </div>
          </div>
        </div>
        {/* TVs, Audio & Video Category */}
        <div className="category-item">
          <Link to="/category/electronics">TVs & Electronics</Link>
          <div className="category-dropdown">
            <div className="dropdown-section">
              <h4>Television</h4>
              <Link to="/category/tv/smart-tv">Smart TVs</Link>
              <Link to="/category/tv/led-tv">LED TVs</Link>
              <Link to="/category/tv/android-tv">Android TVs</Link>
              <Link to="/category/tv/accessories">TV Accessories</Link>
            </div>

            <div className="dropdown-section">
              <h4>Audio Systems</h4>
              <Link to="/category/audio/speakers">Speakers</Link>
              <Link to="/category/audio/home-theater">Home Theater</Link>
              <Link to="/category/audio/soundbars">Soundbars</Link>
              <Link to="/category/audio/amplifiers">Amplifiers</Link>
            </div>

            <div className="dropdown-section">
              <h4>Accessories</h4>
              <Link to="/category/accessories/remotes">TV Remotes</Link>
              <Link to="/category/accessories/wall-mounts">Wall Mounts</Link>
              <Link to="/category/accessories/cables">HDMI & Cables</Link>
              <Link to="/category/accessories/antennas">TV Antennas</Link>
            </div>
          </div>
        </div>

        {/* Home Appliances Category */}
        <div className="category-item">
          <Link to="/category/appliances">Home Appliances</Link>
          <div className="category-dropdown">
            <div className="dropdown-section">
              <h4>Large Appliances</h4>
              <Link to="/category/appliances/refrigerators">Refrigerators</Link>
              <Link to="/category/appliances/freezers">Freezers</Link>
              <Link to="/category/appliances/washers">Washing Machines</Link>
              <Link to="/category/appliances/dryers">Dryers</Link>
            </div>

            <div className="dropdown-section">
              <h4>Cooling & Heating</h4>
              <Link to="/category/cooling/ac">Air Conditioners</Link>
              <Link to="/category/cooling/fans">Fans</Link>
              <Link to="/category/cooling/air-coolers">Air Coolers</Link>
              <Link to="/category/heating/heaters">Room Heaters</Link>
            </div>

            <div className="dropdown-section">
              <h4>Water & Air</h4>
              <Link to="/category/water/dispensers">Water Dispensers</Link>
              <Link to="/category/water/purifiers">Water Purifiers</Link>
              <Link to="/category/air/purifiers">Air Purifiers</Link>
              <Link to="/category/air/humidifiers">Humidifiers</Link>
            </div>
          </div>
        </div>

        {/* Home & Living Category */}
        <div className="category-item">
          <Link to="/category/home-living">Home & Living</Link>
          <div className="category-dropdown">
            <div className="dropdown-section">
              <h4>Home Decor</h4>
              <Link to="/category/decor/rugs">Rugs & Carpets</Link>
              <Link to="/category/decor/curtains">Curtains</Link>
              <Link to="/category/decor/wall-art">Wall Art</Link>
              <Link to="/category/decor/mirrors">Mirrors</Link>
              <Link to="/category/decor/clocks">Clocks</Link>
            </div>

            <div className="dropdown-section">
              <h4>Home Storage</h4>
              <Link to="/category/storage/wardrobes">Wardrobes</Link>
              <Link to="/category/storage/shoe-racks">Shoe Racks</Link>
              <Link to="/category/storage/containers">Storage Containers</Link>
              <Link to="/category/storage/organizers">Organizers</Link>
            </div>

            <div className="dropdown-section">
              <h4>Bedding</h4>
              <Link to="/category/bedding/mattresses">Mattresses</Link>
              <Link to="/category/bedding/pillows">Pillows</Link>
              <Link to="/category/bedding/sheets">Bed Sheets</Link>
              <Link to="/category/bedding/mosquito-nets">Mosquito Nets</Link>
            </div>
          </div>
        </div>

        {/* Lighting & Outdoor Category */}
        <div className="category-item">
          <Link to="/category/lighting-outdoor">Lighting & Outdoor</Link>
          <div className="category-dropdown">
            <div className="dropdown-section">
              <h4>Indoor Lighting</h4>
              <Link to="/category/lighting/ceiling">Ceiling Lights</Link>
              <Link to="/category/lighting/wall">Wall Lights</Link>
              <Link to="/category/lighting/table">Table Lamps</Link>
              <Link to="/category/lighting/decorative">Decorative Lights</Link>
            </div>

            <div className="dropdown-section">
              <h4>Outdoor Lighting</h4>
              <Link to="/category/outdoor/solar">Solar Lights</Link>
              <Link to="/category/outdoor/security">Security Lights</Link>
              <Link to="/category/outdoor/garden">Garden Lights</Link>
              <Link to="/category/outdoor/flood">Flood Lights</Link>
            </div>

            <div className="dropdown-section">
              <h4>Power Solutions</h4>
              <Link to="/category/power/solar-panels">Solar Panels</Link>
              <Link to="/category/power/inverters">Inverters</Link>
              <Link to="/category/power/batteries">Batteries</Link>
              <Link to="/category/power/accessories">Accessories</Link>
            </div>
          </div>
        </div>

        
        {/* Computing & Accessories Category */}
        <div className="category-item">
          <Link to="/category/computing">Computing & Accessories</Link>
          <div className="category-dropdown">
            <div className="dropdown-section">
              <h4>Computers</h4>
              <Link to="/category/computing/laptops">Laptops</Link>
              <Link to="/category/computing/desktops">Desktop PCs</Link>
              <Link to="/category/computing/monitors">Monitors</Link>
              <Link to="/category/computing/all-in-one">All-In-One PCs</Link>
            </div>

            <div className="dropdown-section">
              <h4>Computer Accessories</h4>
              <Link to="/category/computing/keyboards">Keyboards</Link>
              <Link to="/category/computing/mouse">Mouse & Pointing</Link>
              <Link to="/category/computing/storage">Hard Drives & SSDs</Link>
              <Link to="/category/computing/printers">Printers & Scanners</Link>
              <Link to="/category/computing/networking">Networking</Link>
            </div>

            <div className="dropdown-section">
              <h4>Computer Components</h4>
              <Link to="/category/computing/processors">Processors</Link>
              <Link to="/category/computing/memory">RAM & Memory</Link>
              <Link to="/category/computing/graphics-cards">Graphics Cards</Link>
              <Link to="/category/computing/motherboards">Motherboards</Link>
            </div>
          </div>
        </div>

        {/* Fashion & Clothing Category */}
        <div className="category-item">
          <Link to="/category/fashion">Fashion & Clothing</Link>
          <div className="category-dropdown">
            <div className="dropdown-section">
              <h4>Men's Fashion</h4>
              <Link to="/category/fashion/men/shirts">Shirts</Link>
              <Link to="/category/fashion/men/trousers">Trousers & Pants</Link>
              <Link to="/category/fashion/men/suits">Suits</Link>
              <Link to="/category/fashion/men/shoes">Men's Shoes</Link>
              <Link to="/category/fashion/men/accessories">Accessories</Link>
            </div>

            <div className="dropdown-section">
              <h4>Women's Fashion</h4>
              <Link to="/category/fashion/women/dresses">Dresses</Link>
              <Link to="/category/fashion/women/tops">Tops & Blouses</Link>
              <Link to="/category/fashion/women/skirts">Skirts</Link>
              <Link to="/category/fashion/women/shoes">Women's Shoes</Link>
              <Link to="/category/fashion/women/bags">Bags & Purses</Link>
            </div>

            <div className="dropdown-section">
              <h4>Fashion Accessories</h4>
              <Link to="/category/fashion/watches">Watches</Link>
              <Link to="/category/fashion/jewelry">Jewelry</Link>
              <Link to="/category/fashion/belts">Belts</Link>
              <Link to="/category/fashion/sunglasses">Sunglasses</Link>
              <Link to="/category/fashion/wallets">Wallets</Link>
            </div>
          </div>
        </div>
        
        {/* Top Brands Category */}
        <div className="category-item">
          <Link to="/category/brands">Top Brands</Link>
          <div className="category-dropdown">
            <div className="dropdown-section">
              <h4>Kitchen & Home</h4>
              <Link to="/brand/sundabest">Sundabest</Link>
              <Link to="/brand/nunix">Nunix</Link>
              <Link to="/brand/rashnik">Rashnik</Link>
            </div>

            <div className="dropdown-section">
              <h4>Electronics</h4>
              <Link to="/brand/niceone">NiceOne</Link>
              <Link to="/brand/ecoa">Ecoa</Link>
              <Link to="/brand/ailyons">Ailyons</Link>
            </div>

            <div className="dropdown-section">
              <h4>Featured Brands</h4>
              <Link to="/brand/featured">View All Brands</Link>
              <Link to="/brand/new">New Arrivals</Link>
              <Link to="/brand/deals">Brand Deals</Link>
            </div>
          </div>
        </div>
        {/* Add more categories as needed */}
      </div>

      {/* Hero Section */}
      {/* <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}> */}
      {/* Using GIF as background */}
      
      <section className="hero-section" style={{ backgroundImage: `url(${heroGif})` }}>
        <div className="hero-content">
          
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="product-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <div className="scroll-buttons">
            <button 
              className="scroll-btn prev" 
              onClick={() => handleScroll('left', 'featured')}
              aria-label="Scroll left"
            >‹</button>
            <button 
              className="scroll-btn next" 
              onClick={() => handleScroll('right', 'featured')}
              aria-label="Scroll right"
            >›</button>
          </div>
        </div>
        <div className="products-scroll">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section id="popular" className="product-section">
        <div className="section-header">
          <h2>Popular Products</h2>
          <div className="scroll-buttons">
            <button 
              className="scroll-btn prev" 
              onClick={() => handleScroll('left', 'popular')}
              aria-label="Scroll left"
            >‹</button>
            <button 
              className="scroll-btn next" 
              onClick={() => handleScroll('right', 'popular')}
              aria-label="Scroll right"
            >›</button>
          </div>
        </div>
        <div className="products-scroll">
          {products.slice(1, 12).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Latest Products Section */}
      <section id="latest" className="product-section">
        <div className="section-header">
          <h2>Latest Arrivals</h2>
          <div className="scroll-buttons">
            <button 
              className="scroll-btn prev" 
              onClick={() => handleScroll('left', 'latest')}
              aria-label="Scroll left"
            >‹</button>
            <button 
              className="scroll-btn next" 
              onClick={() => handleScroll('right', 'latest')}
              aria-label="Scroll right"
            >›</button>
          </div>
        </div>
        <div className="products-scroll">
          {products.slice(12, 20).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="clearance" className="product-section clearance">
        <div className="section-header">
          <h2>Special Offers</h2>
          <div className="scroll-buttons">
            <button 
              className="scroll-btn prev" 
              onClick={() => handleScroll('left', 'clearance')}
              aria-label="Scroll left"
            >‹</button>
            <button 
              className="scroll-btn next" 
              onClick={() => handleScroll('right', 'clearance')}
              aria-label="Scroll right"
            >›</button>
          </div>
        </div>
        <div className="products-scroll">
          {finalSpecialProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section id="categories" className="product-section categories">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <div className="scroll-buttons">
            <button 
              className="scroll-btn prev" 
              onClick={() => handleScroll('left', 'categories')}
              aria-label="Scroll left"
            >‹</button>
            <button 
              className="scroll-btn next" 
              onClick={() => handleScroll('right', 'categories')}
              aria-label="Scroll right"
            >›</button>
          </div>
        </div>
        <div className="products-scroll">
          {/* Category cards using imported images */}
          <div className="category-card">
            <Link to="/category/kitchen-appliances">
              <div className="category-image">
                <img src={kitchenImg} alt="Kitchen Appliances" />
              </div>
              <h3>Kitchen Appliances</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/category/electronics">
              <div className="category-image">
                <img src={tvImg} alt="Electronics" />
              </div>
              <h3>TVs & Electronics</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/category/appliances">
              <div className="category-image">
                <img src={appliancesImg} alt="Home Appliances" />
              </div>
              <h3>Home Appliances</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/category/home-living">
              <div className="category-image">
                <img src={homeLivingImg} alt="Home & Living" />
              </div>
              <h3>Home & Living</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/category/lighting-outdoor">
              <div className="category-image">
                <img src={lightingImg} alt="Lighting & Outdoor" />
              </div>
              <h3>Lighting & Outdoor</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/category/computing">
              <div className="category-image">
                <img src={computingImg} alt="Computing" />
              </div>
              <h3>Computing</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/category/fashion">
              <div className="category-image">
                <img src={fashionImg} alt="Fashion" />
              </div>
              <h3>Fashion</h3>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Home