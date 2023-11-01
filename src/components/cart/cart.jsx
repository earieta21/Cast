import React, {useContext} from "react";
import {ShopContext} from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import './cart.css';

export const Cart = () => {
    const { cartItems, getTotalCart } = useContext(ShopContext);
    const {removeFromCart} = useContext(ShopContext);
    const {addToCart} = useContext(ShopContext);
    const {removeAllItems} = useContext(ShopContext);
    const navigate = useNavigate();
    return (  
        <div className="cart">
            <h1 className="cart-tittle">Cart</h1>
            <button onClick={removeAllItems}
            className="remove-all-items">Remove all Items</button>
            {cartItems.lenght === 0 ? (
                <p className="cart-empty">Cart is Empty</p>
            ):(
                <>
                    {cartItems.map((item) => (
                        <div key = {item.id} className="items-container">
                            <div className="item-details">
                                <p className="product-image">{item.productImage}</p>
                             <p className="items">{item.productName} ({item.quantity})</p>
                            </div>
                            <div className="items-actions">
                             <button onClick={() => removeFromCart(item.id)}
                              className="remove-from-cart">-</button>
                             <p className="item-quantity">{item.quantity}</p>
                             <button onClick={() => addToCart(item)} 
                              className="add-to-cart">+</button>
                            </div>
                        </div>
                ))}
                </>
            )}
                <p className="subtotal">Subtotal: ${getTotalCart}</p>
                <div className="cart-buttons">
                    <button onClick={() => navigate('/')}
                    className="continue-shopping">Continue Shopping</button>
                    <button className="checkout-button">Checkout</button>
                </div>
        </div>
    );
}

  