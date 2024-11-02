import React from 'react';
import '../index.css';
import '../styles/About.css';

import { oilDropper, blackGirlbysea } from '../assets';

const About = () => {
  return (
    <article>
      <div className="overlay" />
      <section className='section'>
        <div className="about-container">       
          <img src={blackGirlbysea} alt={blackGirlbysea} id='image-1'/>
          <img src={oilDropper} alt={oilDropper} id='image-2'/>
            <div className="about-content">
              <span id='subtext-3'>SKINCARE THAT PUTS YOUR STORY FIRST</span>
              <span id='subtext-4'>BORN IN ACCRA</span>
              <span id='subtext-5'>PhilyCare is a proud distributor of foreign skincare products that are designed and tailored to meet your needs. We cater for people of character.Serving Ghana with passion. From the beaches of The Cape Coast, to the vibrancy of the North, We Deliver.</span>
              <a href="http://" target="_blank" rel="noopener noreferrer">
              <button className='button' id='order-now-btn'>Order Now</button>
              </a>
            </div>
        </div>
      </section>
    </article>
  )
}

export default About