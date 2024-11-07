// ProductCard.jsx
import React from 'react';
import '../component-styles/Card.css'

const Card = ({ index, image, price, url }) => {
  return (
    <div className="product-card">
      <img src={image} alt={`Product ${index}`} className="product-image" />
      <p className="product-price">GHC{price}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="product-link">
        <button>Order</button>
      </a>
    </div>
  );
};

export default Card;
