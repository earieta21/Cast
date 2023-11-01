import React, { useContext } from "react";
import Products from "../Products";
import './shop.css';
import { ShopContext } from "../../context/shop-context";

const Shop = () => {
    const {addToCart} = useContext(ShopContext);
    const {cartItems} = useContext(ShopContext);
    return (
        <div className="shop-container">
        <div className="shop-title">
          <h1>Shop</h1>
        </div>
        <div className="products-list">
          {Products.map((item) => (
            <div key={item.id} className="product">
              <div className="product-image">
                {item.productImage}
              </div>
              <div className="product-details">
                <h2 className="product-name">{item.productName}</h2>
                <p className="product-price">${item.price}</p>
              </div>
              <button onClick={() => addToCart(item)} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      
    )
};

export default Shop;