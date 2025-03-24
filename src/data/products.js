// Import all product images
import cerealDispenser from '../assets/products/cereal_Dispenser.jpg';
import sandwichMaker from '../assets/products/sokany-sandwich-maker.jpg';
import steamerIron from '../assets/products/tobi-handheld-steamer1.jpg';
import coffeeMaker from '../assets/products/sokany-coffee-maker.jpg';
import ledLight from '../assets/products/DP-led-light.jpg';
import blender from '../assets/products/signature-blender-3-in-1.jpg';
import handBlender from '../assets/products/sokany-hand-blender.jpg';
import juicer from '../assets/products/sokany-juicer.jpg';

export const products = [
  {
    id: 1,
    name: "Cereal Dispenser",
    price: 2999.99,
    oldPrice: 3560,
    description: "This is a sample product description",
    image: cerealDispenser,
    category: "kitchen-appliances",
    subcategory: "kitchen-storage"
  },
  {
    id: 2,
    name: "SOKANY 3-in-1 Sandwich Maker",
    price: 1500,
    oldPrice: 1750,
    description: "750W multi-functional sandwich maker with 3 interchangeable plates for sandwiches, waffles, and donuts. Non-stick coating for easy cleaning.",
    image: sandwichMaker,
    category: "kitchen-appliances",
    subcategory: "sandwich-makers"
  },
  {
    id: 3,
    name: "Portable Handheld Steamer Iron",
    price: 1299.99,
    oldPrice: 1500,
    description: "Compact and powerful clothes steamer with dual functionality - can be used as both steamer and iron. Perfect for travel and quick touch-ups.",
    image: steamerIron,
    category: "home-appliances",
    subcategory: "irons-steamers"
  },
  {
    id: 4,
    name: "Premium Coffee Maker",
    price: 2700,
    oldPrice: 3300,
    description: "Automatic drip coffee maker with 12-cup capacity, programmable timer, and permanent filter. Perfect for your morning coffee ritual.",
    image: coffeeMaker,
    category: "kitchen-appliances",
    subcategory: "coffee-makers"
  },
  {
    id: 5,
    name: "GZLIDY Rechargeable LED Searchlight",
    price: 999,
    oldPrice: 1200,
    description: "2-mode LED searchlight with high and low beam settings. Features removable outer ring, professional lanyard hole, and USB charging capability. Effective range up to 500m.",
    image: ledLight,
    category: "lighting-outdoor",
    subcategory: "outdoor-lighting"
  },
  {
    id: 6,
    name: "Signature SGP22 Blender and Grinder 3-in-1",
    price: 3499,
    oldPrice: 3865,
    description: "300-350W powerful blender with 3PCS/SET PC JAR, 1500mL capacity. Perfect for smoothies, grinding, and food processing. Available in black and white colors.",
    image: blender,
    category: "kitchen-appliances",
    subcategory: "blenders",
    // cod: true,
    // minDeposit: 1000
  },
  {
    id: 7,
    name: "4-in-1 Hand Blender",
    price: 3100,
    oldPrice: 3500,
    description: "500W hand blender with multiple attachments including chopper, whisk, and blending cup. Perfect for soups, smoothies, and food preparation.",
    image: handBlender,
    category: "kitchen-appliances",
    subcategory: "hand-blenders"
  },
  {
    id: 8,
    name: "SOKANY Juice Extractor",
    price: 4500,
    oldPrice: 4900,
    description: "Professional juice extractor with large feeding tube, stainless steel blade, and powerful motor. Perfect for fruits and vegetables. Model: SK-4000",
    image: juicer,
    category: "kitchen-appliances",
    subcategory: "juicers"
  }
];