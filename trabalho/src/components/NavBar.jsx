import logo from '../images/logoPokemon.png'
import React from "react"


export default function NavBar() {
    return (
        <div className="navBar">
            <div className='navBarNomes'>
                <p>Alexandre Wild</p>
                <p>Diogo Gomes</p>
                <p>Matheus Reis</p>
            </div>
            <div className='navBarTitulo'>
                <img style={{height: '70px'}} src={logo} alt="logo do pokemon" />
                <p className='subTitulo'>UX/UI case study</p>
            </div>


        </div>
    )
}