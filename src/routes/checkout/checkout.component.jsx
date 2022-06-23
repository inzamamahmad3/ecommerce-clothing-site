import "./checkout.styles.scss"
import { useContext } from "react";

import React from 'react';
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const { cartItems, addItemToCart, removeCartItems } = useContext(CartContext)

    // You can add multiple things here

    return (
        <div>
            {
                cartItems.map((cartItem)=> {
                    const {id, name, quantity} = cartItem;
                    return <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span onClick={()=>removeCartItems(cartItem)} > decrement </span>
                        <span onClick={()=>addItemToCart(cartItem)}> Increment </span>
                    </div>
                })
            }
        </div>
    );
}

export default Checkout;
