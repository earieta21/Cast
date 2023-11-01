import React, {createContext, useState} from "react";

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const getTotalCart = cartItems.reduce((total, item) => 
    total + item.price * item.quantity, 0);

    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItems) => cartItems.id === item.id);
        if (existingItem) {
            setCartItems (
                cartItems.map((cartItems) =>
                cartItems.id === item.id ? {...cartItems, quantity: cartItems.quantity + 1 } : cartItems
                )
            );
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    };

    const removeFromCart = (itemId) => {
        const existingItem = cartItems.find((cartItems) => cartItems.id === itemId);
        if (existingItem.quantity > 1) {
            setCartItems (
                cartItems.map((cartItems) =>
                cartItems.id === itemId ? {...cartItems, quantity: cartItems.quantity - 1} : cartItems
                )
            );
        } else {
            setCartItems(cartItems.filter((item) => item.id !== itemId));
        }
    };

    const removeAllItems = () => {
        setCartItems([]);
    };

    const contextValue = { 
        cartItems, 
        addToCart, 
        removeFromCart, 
        getTotalCart,
        removeAllItems
    };

    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};