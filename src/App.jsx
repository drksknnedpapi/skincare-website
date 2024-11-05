import React from "react";
import "./index.css";
import "./App.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />   
      <About />
       {/*
      <Footer />
        <Products />
        <Testimonials />
       */}
    </div>
  );
};

export default App;
