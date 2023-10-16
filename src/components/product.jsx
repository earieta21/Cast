import "./product.css"
import React, { useContext } from "react";

export const Product = (props) => {
    const { id, name, price, productImage } = props.data; 
    return (
        <div className="product">
            <img src={productImage} alt="" />
            <div className="description">
                <b><h2>{name}</h2></b>
                <h3>${price}</h3>
            </div>
            <div className="addtocart" >
                <button className="addToCart" onClick={() => addToCart(id)}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
