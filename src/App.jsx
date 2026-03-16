import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {

  const [showProductList, setShowProductList] = useState(false);

  if(showProductList){
    return <ProductList />;
  }

  return (
    <div className="background-image">
      <div className="landing-content">

        <h1>Paradise Nursery</h1>

        <AboutUs />

        <button onClick={() => setShowProductList(true)}>
          Get Started
        </button>

      </div>
    </div>
  );
}

export default App;