import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
return (
    <>
        <nav className='navBar'>
            <div className="contenedor">
                <a href="../../index.html" className='logo'><span className='logo-color'>&lt;</span>Sistemas-SF<span className='logo-color'>/&gt;</span></a>
                <div className="navigation">
                    <ul className='list'>
                        <li className='list-item'><button className='list-ref' href="#">Inicio</button></li>
                        <li className='list-item'><button className='list-ref' href="#">Mi perfil</button></li>
                        <li className='list-item'><button className='list-ref' href="#">Novedades</button></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar
