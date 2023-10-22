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

    const getTotalCart = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number (item));
                totalAmount += cartItems[item] * itemInfo.price
            }
    }
    return totalAmount;
    };

    const addToCart = (id) => {
        setCartItems ((prev) => ({...prev, [id]: prev[id] + 1}));
    };

    const removeFromCart = (id) => {
        setCartItems ((prev) => ({...prev, [id]: prev[id] - 1}));
    };

    const updateCartItem = (newAmount, itemId) => {
        setCartItems ((prev) => ({...prev, [itemId]: newAmount}))
    }

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