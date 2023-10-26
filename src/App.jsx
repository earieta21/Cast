import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Shop } from "./components/shop/shop"
import cart from "./components/cart/cart"; // React components should be capitalized! 
import { ShopContextProvider } from "./context/shop-context";

function App () {
 return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Shop />}/>
           <Route path="/cart" element = {<cart />}/>  {/* React components should always be capitalized - this may cause an error */}
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;