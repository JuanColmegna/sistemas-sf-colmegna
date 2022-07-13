import { useState } from "react";
import Contador from "./Contador/Contador";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [numero, setNumero] = useState(initial);
    const incrementar = () => {
        numero < stock ? setNumero(numero +1) : setNumero(numero);
    }
    const decrementar = () => {
        numero > 0 ? setNumero(numero -1) : setNumero(numero)
    }
    return (
        <div className="div-botons">
            <div className="div-count">
                <button onClick={decrementar} className="boton-count">-</button>
                <>
                    <Contador numero={numero}/>
                </>
                <button onClick={incrementar} className="boton-count">+</button>
            </div>
            <div className="div-add">
                <button onClick={onAdd} className="boton-addto-cart">
                    Add to card
                </button>
            </div>
        </div>
    );
}

export default ItemCount
