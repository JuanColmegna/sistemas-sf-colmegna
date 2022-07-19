import React, {useState} from 'react'
import Modal from '../../../../../Modal/Modal';
import './ItemDetail.css'

const ItemDetail = ({item}) => {

const[estadoModal, cambiarEstadoModal] = useState(false);

return (
    <>
    <div className='contenedor-item-detail'>
        <button className='boton-item-detail'>
            Más Información
        </button>
        <Modal 
        estado={estadoModal} 
        cambiarEstado={cambiarEstadoModal}>
            <div>
                <img src={item.img} alt="imagen-item-modal" className='imagen-item-modal'/>
                <p className='descripcion-modal'>Descripción del producto: {item.description}</p>
            </div>
        </Modal>
    </div>
    </>
)
}

export default ItemDetail
