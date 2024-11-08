import React from "react";
import "../styles/Products.css";
import Card from "./components/Card";

import {
  ceraveAcneControlCleanser,
  ceraveFacialMoistureLotion,
  macHyperRealSerumizer,
  ceraveFoamingCleanserBar,
  ceraveHydratingCleansingBar,
  roseHyaluronicSet,
  zozuEyeMask,
  AveenoCalmRestoreMoisurizer,
  roseHyaluronicAcid,
  PanOxylFoamingWash,
  CantuSheaButter,
  APLBretinolFacialToner,
  natriumBhpLiquidExfoliant,
  sadoer6pieceAvocadoSkincare,
} from "../assets";

const Products = () => {
  const product = [
    {
      id: 1,
      productImage: ceraveAcneControlCleanser,
      title: "CeraVe Acne Control Cleanser",
      description: "Calm Face Oil, 237 ML",
      price: "112.00",
    },
    {
      id: 2,
      productImage: ceraveFacialMoistureLotion,
      title: "CeraVe Facial Moisture Lotion",
      description: "Serene Glow, 60 ML",
      price: "85.00",
    },
    {
      id: 3,
      productImage: macHyperRealSerumizer,
      title: "MAC Hyper Real Serumizer",
      description: "Hydrating Spray, 30 ML",
      price: "45.00",
    },
    {
      id: 4,
      productImage: ceraveFoamingCleanserBar,
      title: "Long June",
      description: "Calm Face Oil, 30 ML",
      price: "112.00",
    },
    {
      id: 5,
      productImage: roseHyaluronicSet,
      title: "Serene Glow",
      description: "Brightening Serum, 50 ML",
      price: "85.00",
    },
    {
      id: 6,
      productImage: ceraveHydratingCleansingBar,
      title: "Radiant Mist",
      description: "Hydrating Spray, 100 ML",
      price: "45.00",
    },
    {
      id: 7,
      productImage: zozuEyeMask,
      title: "Serene Glow",
      description: "Brightening Serum, 50 ML",
      price: "85.00",
    },
    {
      id: 8,
      productImage: AveenoCalmRestoreMoisurizer,
      title: "Radiant Mist",
      description: "Hydrating Spray, 100 ML",
      price: "45.00",
    },
    {
      id: 9,
      productImage: roseHyaluronicAcid,
      title: "Radiant Mist",
      description: "Hydrating Spray, 100 ML",
      price: "45.00",
    },
    {
      id: 10,
      productImage: CantuSheaButter,
      title: "Radiant Mist",
      description: "Hydrating Spray, 100 ML",
      price: "45.00",
    },
    {
      id: 11,
      productImage: PanOxylFoamingWash,
      title: "Radiant Mist",
      description: "Hydrating Spray, 100 ML",
      price: "45.00",
    },
    {
      id: 12,
      productImage: APLBretinolFacialToner,
      title: "Radiant Mist",
      description: "Hydrating Spray, 100 ML",
      price: "45.00",
    },
    {
      id: 11,
      productImage: natriumBhpLiquidExfoliant,
      title: "Radiant Mist",
      description: "Hydrating Spray, 100 ML",
      price: "45.00",
    },
    {
      id: 11,
      productImage:sadoer6pieceAvocadoSkincare,
      title: "Radiant Mist",
      description: "Hydrating Spray, 100 ML",
      price: "45.00",
    },
  ];

  return (
    <article>
      <section className="section">
        <span id="sub-title">Rejuvenate</span>
        <span id="page-title"> Products</span>
        <div className="products-section">
          {product.map((product) => (
            <Card
              key={product.id}
              productImage={product.productImage}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}

            <h1>MORE PRODUCTS COMING TO OUR STORE SOON !</h1>
        </div>
      </section>
    </article>
  );
};

export default Products;
