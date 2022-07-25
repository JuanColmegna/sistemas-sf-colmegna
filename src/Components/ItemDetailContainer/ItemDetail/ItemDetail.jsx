import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(0)

    const onAdd = (count) => {
        setCantidad(count)
    };
    return (
            <div className="item-detail">
                <div className="item-detail-div">
                    <div className='item-detail-card'>
                    <img className="item-detail-img" src={item.img} alt="" />
                    <div className="item-detail-info">
                        <h2 className="item-detail-name">{item.name}</h2>
                        <p className='item-detail-description'><span className='item-detail-content'>Descripcion:</span> {item.description}</p>
                        <p className="item-detail-description"><span className='item-detail-content'>Marca:</span> {item.marca}</p>
                        <p className="item-detail-description"><span className='item-detail-content'>Unidades disponibles: </span><span className="item-detail-stock">{item.stock}</span></p>
                        <p className="item-detail-price">Precio: {item.precio}</p>
                        { cantidad === 0 
                        ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                        : <Link className='item-detail-cart' to='/cart'>Ir al carrito</Link>
                        }
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail
