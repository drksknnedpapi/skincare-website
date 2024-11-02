import React from "react";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <section>
      <header>
        <nav>
            <ul className="navbar">
              <li><a href="/">Logo</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Testimonial</a></li>
            </ul>       

            <ul className="sidebar">
              <li><a href="/">Logo</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Testimonial</a></li>
            </ul>  
        </nav>
      </header>
    </section>
  );
};

export default Nav;
