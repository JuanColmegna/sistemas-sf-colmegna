import { useState, useEffect } from "react";
import { mock } from "../../mock/mock";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
const [items, setItems] = useState([]);

useEffect(() => {
    const traerMock = new Promise((res) => {
    setTimeout(() => {
        res(mock);
    }, 2000);
    });
    traerMock
    .then((data) => {
        setItems(data);
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

return (
    <div className="container">
        <ItemList items={items} />
    </div>
);
};

export default ItemListContainer;