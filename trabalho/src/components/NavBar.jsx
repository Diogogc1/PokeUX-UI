import logo from '../images/logoPokemon.png'
import React from "react"


export default function NavBar() {
    return (
        <div className="navBar">
            <img src={logo} alt="logo do pokemon"/>
            <p className='subTitulo'>UX/UI case study</p>
        </div>
    )
}