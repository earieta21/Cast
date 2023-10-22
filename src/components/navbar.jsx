import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Links">
                <Link to = '/'>Shop</Link>
                <Link to = '/cart'>
                    <ShoppingCart size={30} />  
                </Link>
            </div>
        </div>
    )
}