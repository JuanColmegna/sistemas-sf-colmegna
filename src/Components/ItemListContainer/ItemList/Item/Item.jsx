import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";


const Item = ({item}) => {
const onAdd = () => {
    console.log("Agregaste al carrito");
};
    return (
    <div className="product">
        <img className="product-img" src={item.img} alt="" />
        <div className="product-text">
            <h2 className="product-title">{item.nombre}</h2>
            <p className="product-information">Marca: {item.marca}</p>
            <p className="product-information">Unidades disponibles: <span className="product-stock">{item.stock}</span></p>
            <p className="product-information">Precio: {item.precio}</p>
        </div>
        <ItemDetailContainer item={item}/>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
    </div>
    );
};

export default Item;