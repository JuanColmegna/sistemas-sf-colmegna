import React from 'react';
import cartLogo from'./cart1.png';
import './CartWidget.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

const CartWidget = () => {
    const {cart} = useContext(cartContext);
    return (
    <Link className='enlace-cart' to='/Cart'>
        <img src={cartLogo} alt="carro de compras" className='cart-widget'/>
        {cart.length === 0 ? '' : <h3 className='cantidad'>{cart.length}</h3>}
    </Link>
    )
}

export default CartWidget
