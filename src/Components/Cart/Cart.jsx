import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, deleteOne, suma } = useContext(cartContext);

    if(cart.length === 0){
        return <div className='cart-container'> <h2 className='no-products-cart'> Aún no tenes productos en el carrito, volver al <Link to='/'>Catálogo</Link></h2></div>
    }


    return (
            <div className='cart-container'>
                {
                    cart.map((products) =>(
                        <div>
                            <img src={products.img} alt="imagen del producto"/>
                            <h3>{products.name}</h3>
                            <p>cantidad: {products.stock}</p>
                            <p>${products.precio}</p>
                            <button onClick={() => deleteOne(products.id)}>Eliminar del carrito</button>
                        </div>
                    ))
                }
                <button onClick={clearCart}>Eliminar todos los productos</button>
                <h3>Total: {suma}</h3>
            </div>
    )
}

export default Cart
