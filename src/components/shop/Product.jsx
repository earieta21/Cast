import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
    const {id, name, price} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <div className="description">
                <p>
                    <b>{name}</b>
                </p>
                <p>
                    <b>${price}</b>
                </p>
            </div>
            <button className="addToCart" onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
            </button>
        </div>
    )
}

export default Product;