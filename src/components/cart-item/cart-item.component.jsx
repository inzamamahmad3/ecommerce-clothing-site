
import "./cart-item.styles.scss"

import React from 'react'
import Button from "../button/button.component";

function CartItem({cartItem}) {
    const {name, quantity} = cartItem;
  return (
    <div>
        <h2>{name}</h2>
        <span> {quantity} </span>
        
    </div>
  )
}

export default CartItem