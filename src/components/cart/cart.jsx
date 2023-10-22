import React, {useContext} from "react";
import Products from "../Products";
import CartItem from "./cart-item";
import {ShopContext} from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

const cart = () => {
    const {cartItems, getTotalCart} = useContext(ShopContext);
    const totalCart = getTotalCart();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div>
                <h1>cart</h1>
            </div>
            <div className="cartItems">
                {Products.map ((product) => {
                    if (cartItems[product.id] !== 0){
                        return <CartItem data = {product} />;
                    }
                })}
            </div>
            <div className="checkout">
                {totalAmount === 0 && <p>Your cart is empty</p>}
                <p>Subtotal: ${totalCart}</p>
                <button onClick={() => navigate('/')}>Continue Shopping</button>
                <button>Checkout</button>
            </div>

        </div>
    )
};

export default cart;   