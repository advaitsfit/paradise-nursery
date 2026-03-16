import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <div className="landing-page">

      <h1>🌿 Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery — your one stop shop for beautiful houseplants.
      </p>

      <div className="button-container" style={{marginTop:"20px"}}>

        <Link to="/products">
          <button style={{marginRight:"10px"}}>Get Started</button>
        </Link>

        <Link to="/about">
          <button>About Us</button>
        </Link>

      </div>

      <div className="button-container">
         <Link to="/products"></Link>
         <Link to="/about"></Link>
      </div>

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>

    </div>
  );
}

export default App;