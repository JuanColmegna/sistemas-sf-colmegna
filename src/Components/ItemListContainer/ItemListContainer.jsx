import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
const [items, setItems] = useState([]);

useEffect(() => {
    getProducts();
},[]);

const getProducts = async() => {
    await fetch('https://62d4bf2c5112e98e48528887.mockapi.io/api/products')
        .then(response => {
        return response.json();
        })
        .then((nuevaRespuesta) => {
        setItems(nuevaRespuesta)
        })
        .catch(error => console.log(error))
}


return (
    <div className="container item-list">
        <ItemList items={items} />
    </div>
);
};

export default ItemListContainer;