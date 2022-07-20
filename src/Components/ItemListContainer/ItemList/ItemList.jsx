import React from "react";
import Item from "./Item/Item";
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className="products">
        {items.map((item) => (
            <Item item={item} key={item.id}/>
        ))}
        </div>
    );
    };

export default ItemList