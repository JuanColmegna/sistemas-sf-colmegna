import React from "react";
import './Item.css';
import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (
        <>
            <div className="product">
                <img className="product-img" src={item.img} alt="" />
                <div className="product-text">
                    <h2 className="product-title">{item.name}</h2>
                    <p className="product-information">Marca: {item.marca}</p>
                    <p className="product-information">Unidades disponibles: <span className="product-stock">{item.stock}</span></p>
                    <p className="product-information">Precio: {item.precio}</p>
                    <Link to={`/item/${item.id}`}>
                        <button className="product-button">Más Información</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Item;