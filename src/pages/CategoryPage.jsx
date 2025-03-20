import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import './CategoryPage.css'; 

const CategoryPage = () => {
  const { categoryName } = useParams();
  
  // Logic to handle both categories and subcategories
  const categoryProducts = products.filter(product => {
    const category = categoryName.replace('/kitchen/', '').replace('/category/', '');
    return product.category === category || product.subcategory === category;
  });

  return (
    <div className="category-page">
      <h2>{categoryName.split('/').pop().split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')}</h2>
      
      {categoryProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="products-grid">
          {categoryProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">Ksh {product.price.toFixed(2)}</p>
              <p className="description">{product.description}</p>
              <Link to={`/product/${product.id}`} className="view-button">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;