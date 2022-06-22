import "./cart-dropdown.styles.scss"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import React from 'react';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();
    const goToCheckoutHandler = ()=>{
        navigate('./checkout')
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >
                {cartItems.map(item => <CartItem  cartItem={item}  key={item.id}/>)}
             </div>
            <Button onClick={goToCheckoutHandler} >Go to Checkout</Button>
            
        </div>
    );
}

export default CartDropdown;
