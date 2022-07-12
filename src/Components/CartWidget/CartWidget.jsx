import React from 'react';
import cartLogo from'./cart1.png';
import './CartWidget.css'

const CartWidget = () => {
    return (
    <a className='enlace-cart' href="/">
        <img src={cartLogo} alt="carro de compras" className='cart-widget'/>
    </a>
    )
}

export default CartWidget
