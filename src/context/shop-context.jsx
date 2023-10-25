import React, {createContext, useState} from "react";
import Products from "../components/Products";

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const getTotalCart = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            totalAmount += item.price * item.quantity
    }
    return totalAmount;
    };

    const addToCart = (id) => {
        setCartItems ((prev) => [...prev, id]);
    };

    const removeFromCart = (id) => {
        setCartItems ((prev) => prev.filter((itemId) => itemId !== id));
    };

    const updateCartItem = (newAmount, itemId) => {
        setCartItems ((prev) => 
        prev.map((item) => (item === itemId ? newAmount : item)));
    };

    const contextValue = { 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItem,
        getTotalCart,
    };

    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};