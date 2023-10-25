import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Cart } from "./components/cart/cart";
import Shop from "./components/shop/shop";
import { ShopContextProvider } from "./context/shop-context";

function App () {
 return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Shop />}/>
          <Route path="/cart" element = {<Cart />}/>
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;