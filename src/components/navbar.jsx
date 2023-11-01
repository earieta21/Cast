import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context"; 
import "./navbar.css"


export const Navbar = () => {
    const {cartItems} = useContext(ShopContext)
    return (
        <div className="navbar">
            <div className="links">
                <Link to = '/'>Shop</Link>
                <Link to = '/cart'>
                    <ShoppingCart size={30} className="shopping-cart-icon"/>  
                    <span className="cart-item-count">{cartItems.lenght}</span>
                </Link>
            </div>
        </div>
    )
}