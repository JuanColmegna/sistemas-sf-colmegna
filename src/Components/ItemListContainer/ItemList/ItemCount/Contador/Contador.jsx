import React from 'react'
import './Contador.css'

const Contador = ({numero}) => {
    return (
        <h2 className='contador'>{numero}</h2>
    );
}

export default Contador
