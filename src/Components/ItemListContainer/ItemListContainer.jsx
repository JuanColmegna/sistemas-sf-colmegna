import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({itemList}) => {
    return (
        <div className='card'>
            <>
            <ItemCount stock={10} initial={1}/>
            </>
        </div>
    );
}

export default ItemListContainer
