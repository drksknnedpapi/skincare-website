// Nav.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Nav.css";
import { Menu, Close } from '../../public/index';
import { logo } from "../../public/index";

const Nav = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setIsSidebarVisible(true);
  const hideSidebar = () => setIsSidebarVisible(false);

  const scrollToAbout = () => {
    // Scroll to the "About" section on the home page
    navigate("/");
    setTimeout(() => {
      document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
    }, 100); // slight delay to ensure navigation to home first
  };

  return (
    <section>
      <header>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/" onClick={hideSidebar}>
                <img src={logo} alt="Logo" id="logo" />
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link to="/products">Products</Link>
            </li>
            <li className="hideOnMobile">
              <a href="#" onClick={scrollToAbout}>About Us</a>
            </li>
            <li className="hideOnMobile">
              <Link to="/testimonials">Testimonial</Link>
            </li>
            <li onClick={showSidebar} id="menu-icon">
              <a href="#"><img src={Menu} alt="Menu" /></a>
            </li>
          </ul>

          <ul className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
            <li className="showOnMobile">
              <Link to="/products" onClick={hideSidebar}>Products</Link>
            </li>
            <li className="showOnMobile">
              <a href="#" onClick={() => { scrollToAbout(); hideSidebar(); }}>About Us</a>
            </li>
            <li className="showOnMobile">
              <Link to="/testimonials" onClick={hideSidebar}>Testimonial</Link>
            </li>
            <li onClick={hideSidebar}>
              <a href="#"><img src={Close} alt="Close" /></a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Nav;
