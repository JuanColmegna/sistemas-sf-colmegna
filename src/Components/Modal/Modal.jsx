import React from 'react';
import './Modal.css'


const Modal = ({children}, estado, cambiarEstado) => {
    return (
        <> 
        {estado &&
            <div className='overlay'>
                <div className='contenedor-modal'>
                    <div className='encabezado-modal'>
                        <h1 className='titulo-modal'>Título</h1>
                        <button className='boton-cerrar'>
                            X
                        </button>
                    </div>
                    
                    
                    {children}
                </div>
            </div>
        }
        </>
    )
}

export default Modal
