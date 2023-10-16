import React, {createContext, useState} from "react";
import Products from "../components/Products";

export const ShopContext = createContext(null);

const getCart = () => {
    let cart = {}
    for (let i = 1; i < Products.lenght + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCart());

    const addToCart = (id) => {
        setCartItems ((prev) => ({...prev, [id]: prev[id] + 1}));
    };

    const removeFromCart = (id) => {
        setCartItems ((prev) => ({...prev, [id]: prev[id] - 1}));
    };

    const contextValue = { cartItems, addToCart, removeFromCart };

    console.log(cartItems);
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};