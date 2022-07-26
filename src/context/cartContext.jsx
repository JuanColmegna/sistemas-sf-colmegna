// creacion de cartContext
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();

const Provider = ({children}) =>{

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    // agrego elementos al cart

    const addToCart = (item, cantidad) =>{
        if(isInCart(item.id)){
            alert('ya esta en el carrito');
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
    }

    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id)
    }

    // Hago que el estado del cart pase a ser un array vacio 

    const clearCart = () =>{
        setCart([]);
    }

    // Busco el index y elimino del array el item

    const indexItem = (id) => {
        cart.indexOf((item) => item.id === id)
    };

    const removeItem = (item) =>{
        setCart(cart.splice(indexItem(item.id), 1))
    }

    return(
        <cartContext.Provider value={{cart, addToCart, clearCart, removeItem}}>
            {children}
        </cartContext.Provider>
    )
}

export default Provider;