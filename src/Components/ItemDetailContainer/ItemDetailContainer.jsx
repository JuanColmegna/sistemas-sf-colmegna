import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { mock } from "../../mock";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    
    const traerItemPorId = () =>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(mock.find(obj => obj.id === id))
            }, 300)
        })
    }

    useEffect(()=>{
        traerItemPorId().then(
            respuesta => {setItem(respuesta)}
        )
    })

    return (
        <>
            <div className="item-detail-container">
                <ItemDetail item={item}/>
            </div>
        </>
    )
}

export default ItemDetailContainer
