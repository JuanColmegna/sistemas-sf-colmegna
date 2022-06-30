import React from 'react'
import './Navbar.css'

const Navbar = () => {
return (
    <>
        <nav className='navBar'>
            <p className='logo'><span className='logo-color'>&lt;</span>Sistemas-SF<span className='logo-color'>/&gt;</span></p>
            <ul className='list'>
                <li className='list-item'><button className='list-ref' href="#">Inicio</button></li>
                <li className='list-item'><button className='list-ref' href="#">Tienda</button></li>
                <li className='list-item'><button className='list-ref' href="#">Novedades</button></li>
            </ul>
        </nav>
    </>)
}

export default Navbar
