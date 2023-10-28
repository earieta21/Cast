import React, {useContext} from "react";

const CartItem = (props) => {
    const { id, name, price} = props.data;
    const {CartItems, addToCart, removeFromCart} = useContext(ShopContext); // cartItems should not be capitalized 

    return (
        <div className="cartItem">
            <div className="description">
                <p>
                    <b>{name}</b>
                </p>
                <p>
                    <b>${price}</b>
                </p>   
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={CartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)}/>  {/* i like this! the value will need to change*/}
                    <button onClick={() => addToCart(id)}>+</button> {/* pass in product instead of id*/}
                </div>
            </div>
        </div>
    )
}

export default CartItem;