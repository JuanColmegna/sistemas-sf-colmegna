// creacion de cartContext
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();

const Provider = ({children}) =>{

    const [cart, setCart] = useState([]);
    const [suma, setSuma] = useState(0);


    const totalCart = (cantidad) => {
        let suma = 0;
        cart.forEach(item => suma += (item.precio*item.stock));
        setSuma(suma);
    }

    
    // agrego elementos al cart
    
    const addToCart = (item, cantidad) =>{
        if (isInCart(item.id)) {
            cart.map(product => {
                if(product.id === item.id){
                    product.cantidad += cantidad
                    console.log('cart', cart)
                    setCart(cart);
                }
            })
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
    }
    
    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id)
    }
    
    // funcion para eliminar todos los productos del cart
    
    const clearCart = () =>{
        setCart([]);
    }
    
    // funcion para eliminar un producto
    
    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados)
    }
    
    //funcion para calcular el precio (unidades * precio)
    
    useEffect(() => {
        totalCart();
    }, [cart]);

    return(
        <cartContext.Provider value={{cart, addToCart, clearCart, deleteOne, suma}}>
            {children}
        </cartContext.Provider>
    )
}

export default Provider;