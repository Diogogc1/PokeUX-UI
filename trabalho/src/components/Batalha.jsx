import NavBar from "./NavBar";
import React from "react";
import Bulbassauro from "../images/bulbassauro.gif"
import Charmander from "../images/charmander2.gif";
import Vs from "../images/vs.png"
import ataqueFolha from "../images/iconFolha.png"
import ataqueVenenoso from "../images/iconPoison.png";
import "../css/batalha.css"
import { useState } from "react";
import { Link } from 'react-router-dom'

function Pokemon ({imagem, altura, nome, tamanho, posicao}){
    return (
        <div className="pokemon">
            <img style={{height: `${altura}px`, position: "relative", bottom: `${posicao}px`}}  src={imagem} alt="Imagem do Bulbassauro"/>
            <Sombra/>
            <div id="alinhamento">
                <Vida tamanho={tamanho}/>
                <NomePokemon nome={nome}/>
            </div>
        </div>
    )
}

function Sombra (){
    return(
        <div id="sombra"></div>
    )
}

function Vida ({tamanho}){
    return(
        <div id="vidaTotal">
            <div style={{width: `${tamanho}%`}} id="vidaRestante"></div>
        </div>
    )
}

function NomePokemon({nome}){
    return <h2>{nome}</h2>
}

function NomePokemonCardBatalha({nome}){
    return <p id="NomePokemonCardBatalha">{nome}</p>
}

function Ataque ({nome, icone, tipo, cor, dano, setPercentVida}){
    function danoAtaque(dano){
        setPercentVida(prevPercentVida => prevPercentVida - dano); 
    }

    return (
        <div onClick={() => danoAtaque(dano)} id="ataque" style={{backgroundColor: cor}}>
            <p>{nome}</p>
            <img src={icone} alt={`Ícone do tipo de ataque ${tipo}`}/>
        </div>
    )
}

function Vitoria(){
    return ( 
        <div id="vitoria">
            <Link id='link' to={"/"}>
                <p>Você ganhou!</p>
            </Link>
        </div>
    );
}

export default function Batalha({tipo}){
    const [percentVida, setPercentVida] = useState(100);

    switch(tipo){
        case 0: {
            if(percentVida <= 0){
                return (
                    <div class="divPrincipal">
                        <NavBar/>
                        <Vitoria/>
                    </div>
                );
            }else{
                return(
                    <div class="divPrincipal">
                        <NavBar/>

                        {/*Div com os Pokémons*/}
                        <div id="pokemons">
                            <Pokemon imagem={Bulbassauro} altura="200" nome="Bulbassauro" tamanho={100} posicao={0}/>
                            <img id="vs" src={Vs} alt="Imagem de Versus abreviado para VS"/>
                            <Pokemon imagem={Charmander} altura="200" nome="Charmander" tamanho={percentVida} posicao={10}/>
                        </div>

                        {/*Card com as opções de Ataque*/}
                        <div id="cardBatalha">
                            <div id="descricao">
                                <p>O que o seu Pokémon vai fazer?</p>
                                <NomePokemonCardBatalha nome="Bulbassauro" icone/>
                            </div>

                            <div id="ataques">
                                <Ataque nome="Chicote de UX" icone={ataqueFolha} tipo="folha" cor="rgba(99, 188, 90, 1)" dano={10} setPercentVida={setPercentVida}/>
                                <Ataque nome="Teste Navalha" icone={ataqueVenenoso} tipo="Veneno" cor="rgba(181, 103, 206, 1)" dano={20} setPercentVida={setPercentVida}/>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
} 