import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
    const { id, name, price} = props.data;
    const {CartItems, addToCart, removeFromCart} = useContext(ShopContext);
    console.log( props)

    return (
       <div className="cartItem">
            <div className="description">
                <p>
                    <b>{name}</b>
                </p>
                <p>
                    <b>${price}</b>
                </p>   
                {/* <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input 
                    value={CartItems[id]} 
                    onChange={(e) => updateCartItem(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div> */}
            </div>
        </div>
    )
}

export default CartItem;