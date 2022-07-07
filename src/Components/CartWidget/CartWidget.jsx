import React from 'react';
import cartLogo from'./cart1.png';
import './CartWidget.css'

const CartWidget = () => {
    return (
    <img src={cartLogo} alt="carro de compras" className='cart-widget'/>
    )
}

export default CartWidget
