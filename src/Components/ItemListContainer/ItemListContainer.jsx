import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { mock } from "../../mock";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import './ItemListContainer.css'

const ItemListContainer = () => {
const [items, setItems] = useState([]);
const [cargando, setCargando] = useState(true);
const { categoria } = useParams();

useEffect(() => {
    const traerMock = new Promise((res) => {
    setCargando(true)
    setTimeout(() => {
        res(categoria ? mock.filter(obj => obj.categoria === categoria) : mock)
    }, 1000);
    });
    traerMock
    .then((data) => {
        setItems(data);
        setCargando(false);
    })
    .catch((error) => {
        console.log(error);
    });
}, [categoria]);



return (<>{cargando ? <Loader/> : <div className="container item-list"><ItemList items={items} /></div>}</>
);
};

export default ItemListContainer;