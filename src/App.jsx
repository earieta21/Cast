import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Shop } from "./components/shop/shop"
import cart from "./components/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App () {
 return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Shop />}/>
          <Route path="/cart" element = {<cart />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;