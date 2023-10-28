import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
const Product = (props) => {
    const {id, name, price} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]; // to calculate this, you can get quantity from the cartItems context
    return (
        <div className="product">
            <div className="description">
                <p>
                    <b>{name}</b>
                </p>
                <p>
                    <b>${price}</b>
                </p>
            </div>  {/*  you can add an image here */}
          <button className="addToCart" onClick={() => addToCart(id)}>    {/* instead of adding the id to cart, add the product object */}
                Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
            </button>
        </div>
    )
}

export default Product;