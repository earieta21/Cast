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
    // const [cartItems, setCartItems] = useState([]) // here we are changing the cart structure to an array instead of an object
    const [cartItems, setCartItems] = useState(getCart());

    // this function will sum up the prices of all items in the cart 
    const getTotalCart = () => {
        let totalAmount = 0; 
        // loop over each item in the cart 
        for (const item in cartItems) { 
            // totalAmount += item.price * item.quantity // to get the price of each item category, multiply the price by the quantity and add to the totalPrice 
            
            // if (cartItems[item] > 0) {
            //     let itemInfo = Products.find((product) => product.id === Number (item));
            //     totalAmount += cartItems[item] * itemInfo.price
            // }
    }
    return totalAmount;
    };


    /*
    for these functions, think about what you want to happen if: 
    - the cart is empty 
    - the cart has items in it and the user adds an item that is not in the cart
    - user adds an item that is already in the cart 
    - the user removes an item, but the quantity of that item is not zero 
    - the user removes an item and the quantity of that item IS zero 
    */ 

    // addToCart = (product) => // this function takes a product and adds it to the cart 
    const addToCart = (id) => {
        // Use array methods to add a product to the array. 
        setCartItems ((prev) => ({...prev, [id]: prev[id] + 1}));
    };

    const removeFromCart = (id) => {
        // This should remove all of that particular item from the cart 
        setCartItems ((prev) => ({...prev, [id]: prev[id] - 1}));
    };

    const updateCartItem = (newAmount, itemId) => {
        // If the user resets the value, find the item and reset the quantity 
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