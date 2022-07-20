import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
return (
    <>
        <nav className='navBar'>
            <div className="contenedor">
                <Link to="/" className='logo'><span className='logo-color'>&lt;</span>Sistemas-SF<span className='logo-color'>/&gt;</span></Link>
                <div className="navigation">
                    <ul className='list'>
                        <li className='list-item'><NavLink to='/categoria/PLACA-DE-VIDEO' className={({isActive}) => isActive ? "list-ref-activo" : "list-ref"}>Placas de video</NavLink></li>
                        <li className='list-item'><NavLink to='/categoria/MICROPROCESADOR' className={({isActive}) => isActive ? "list-ref-activo" : "list-ref"}>Procesadores</NavLink></li>
                        <li className='list-item'><NavLink to='/categoria/MOTHER' className={({isActive}) => isActive ? "list-ref-activo" : "list-ref"}>Mothers</NavLink></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar
