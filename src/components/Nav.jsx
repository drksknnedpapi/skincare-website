import React, { useState } from "react";
import "../styles/Nav.css";
import { Menu, Close } from '../../public/index';

const Nav = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function showSidebar() {
    setIsSidebarVisible(true);
  }

  function hideSidebar() {
    setIsSidebarVisible(false);
  }

  return (
    <section>
      <header>
        <nav>
          <ul className="navbar">
            <li><a href="/">Logo</a></li>
            <li className="hideOnMobile"><a href="/">Products</a></li>
            <li className="hideOnMobile"><a href="/">About Us</a></li>
            <li className="hideOnMobile"><a href="/">Testimonial</a></li>
            <li onClick={showSidebar} id="menu-icon"><a href="#"><img src={Menu} alt="Menu" /></a></li>
          </ul>

          <ul className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
            <li className="showOnMobile"><a href="/">Products</a></li>
            <li className="showOnMobile"><a href="/">About Us</a></li>
            <li className="showOnMobile"><a href="/">Testimonial</a></li>
            <li onClick={hideSidebar}><a href="#"><img src={Close} alt="Close" /></a></li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Nav;
