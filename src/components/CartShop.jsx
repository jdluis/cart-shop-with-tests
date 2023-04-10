import React, { useState } from 'react';
import '../styles/cart-shop.css';

function CartShop(props) {
    
  return (
    <div id='cartShop'>
        <h3>Cart</h3>
        <div>
        {props.productsInCart && props.productsInCart.map(product => {
          return (
            <p key={product.id}>{product.title}</p>
          )
        })}
        </div>
    </div>
  )
}

export default CartShop