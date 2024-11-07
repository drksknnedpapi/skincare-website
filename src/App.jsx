// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
};

export default App;
