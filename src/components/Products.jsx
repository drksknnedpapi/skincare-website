import React from "react";
import "../styles/Products.css";
import Card from "./components/Card";

import {
  ceraveAcneControlCleanser,
  ceraveFacialMoistureLotion,
} from "../assets";

const Products = () => {

  const product = [
    {
    image: ceraveAcneControlCleanser,
    name: 'CeraVe Acne Control Cleanser',
    price: '29.99',
    url: 'https://example.com/product-link'
  },
  {
    image: ceraveAcneControlCleanser,
    name: 'CeraVe Acne Control Cleanser',
    price: '29.99',
    url: 'https://example.com/product-link'
  },
  {
    image: ceraveAcneControlCleanser,
    name: 'CeraVe Acne Control Cleanser',
    price: '29.99',
    url: 'https://example.com/product-link'
  },
  {
    image: ceraveAcneControlCleanser,
    name: 'CeraVe Acne Control Cleanser',
    price: '29.99',
    url: 'https://example.com/product-link'
  },
];

  return (
    <article>
      <section className="section">
        <span id="sub-title">Rejuvenate</span>
        <span id="page-title"> Products</span>
        <div className="products-section">

        {product.map(( index) => (
        <ProductCard
          key={index}
          index={index}
          image={product.image}
          price={product.price}
          url={product.url}
        />
      ))}
        </div>
      </section>
    </article>
  );
};

export default Products;
