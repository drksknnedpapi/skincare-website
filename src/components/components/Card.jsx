import React from 'react';
import '../component-styles/Card.css';

function Card({ productImage, title, description, price, url }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={productImage} alt={title} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">GHC {price}</p>
        <a href={ url }>
        <button className="add-to-cart-button">Order</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
