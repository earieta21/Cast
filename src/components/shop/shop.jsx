import React from "react";
import Products from "../Products";
import Product from "./Product";

const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTittle">
                <h1>Shop</h1>
            </div>
            <div className="products">
                {Products.map((product) => (<Product data = {product}/>))}
            </div>
        </div>
    )
};

export default Shop;