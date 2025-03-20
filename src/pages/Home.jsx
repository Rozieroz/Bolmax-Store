import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'  // Import products data
import './Home.css'

const Home = () => {
  // Get first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

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
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Bolmax Enterprises</h1>
          <p>Discover our amazing products</p>
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-item">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">Ksh {product.price.toFixed(2)}</p>
                
                {/* <Link to={`/product/${product.id}`} className="view-product">
                  View Details
                </Link> */}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home