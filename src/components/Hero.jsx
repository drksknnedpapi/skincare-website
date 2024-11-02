import React from "react";
import "../index.css";
import "../styles/Hero.css";

import { whiteGirlThinking } from "../assets";

const Hero = () => {
  return (
    <article>
      <div className="overlay" />
      <section className="section">
        <div className="container">
          <img src={whiteGirlThinking} alt={whiteGirlThinking} className="hero-img" />
          <div class="hero-content">
            <span id="title-1">Active</span>
            <span id="title-2">Face</span>
            <span id="title-3">Oils.</span>
            <span id="subtext-1">2024</span>
            <span id="subtext-2">SKIN CARE ECOMMERCE</span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Hero;
