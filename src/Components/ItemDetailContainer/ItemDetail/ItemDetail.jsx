import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount/ItemCount';

const onAdd = () => {
    console.log("Agregaste al carrito");
};

const ItemDetail = ({item}) => {
return (
        <div className="item-detail">
            <div className="item-detail-div">
                <img className="item-detail-img" src={item.img} alt="" />
                <div className="item-detail-info">
                    <h2 className="item-detail-name">{item.name}</h2>
                    <p className='item-detail-description'>Descripcion: {item.description}</p>
                    <p className="item-detail-description">Marca: {item.marca}</p>
                    <p className="item-detail-description">Unidades disponibles: <span className="item-detail-stock">{item.stock}</span></p>
                    <p className="">Precio: {item.precio}</p>
                </div>
            </div>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
)
}

export default ItemDetail
