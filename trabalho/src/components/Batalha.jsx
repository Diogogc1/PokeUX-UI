import NavBar from "./NavBar";
import React from "react";
import Bulbassauro from "../images/bulbassauro.gif"
import Charmander from "../images/charmander2.gif";
import Pikachu from "../images/pikachu2.gif";
import Squirtle from "../images/squirtle.gif"
import Vs from "../images/vs.png"
import ataqueFolha from "../images/iconFolha.png"
import ataqueVenenoso from "../images/iconPoison.png";
import ataqueFogo from "../images/icon_chama.png"
import ataqueAgua from "../images/icon_gota.png"
import "../css/batalha.css"
import { useState } from "react";
import { Link } from 'react-router-dom'

function Pokemon ({imagem, altura, nome, tamanho, posicao, ataque}){
    return (
        <div className="pokemon">
            <div id="imagem">
                <img className={ataque ? 'piscar' : ''} style={{height: `${altura}px`, position: "relative", bottom: `${posicao}px`}}  src={imagem} alt="Imagem do Bulbassauro"/>
            </div>
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

function Ataque ({nome, icone, tipo, cor, dano, setPercentVida, setAtaque}){
    function danoAtaque(dano){
        setPercentVida(prevPercentVida => prevPercentVida - dano); 

        setAtaque(true);

        setTimeout(() => {
        setAtaque(false);
        }, 500);
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
    const [ataque, setAtaque] = useState(false);

    if(percentVida <= 0){
        return (
            <div class="divPrincipal">
                <NavBar/>
                <Vitoria/>
            </div>
        )
    }
    else{
        switch(tipo){
            case 0: {
                return(
                    <div class="divPrincipal">
                        <NavBar/>

                        {/*Div com os Pokémons*/}
                        <div id="pokemons">
                            <Pokemon imagem={Bulbassauro} altura="200" nome="Bulbassauro" tamanho={100} posicao={-4}/>
                            <img id="vs" src={Vs} alt="Imagem de Versus abreviado para VS"/>
                            <Pokemon imagem={Pikachu} altura="500" nome="Pikachu" tamanho={percentVida} posicao={245} ataque={ataque}/>
                        </div>

                        {/*Card com as opções de Ataque*/}
                        <div id="cardBatalha">
                            <div id="descricao">
                                <p>O que o seu Pokémon vai fazer?</p>
                                <NomePokemonCardBatalha nome="Bulbassauro" icone/>
                            </div>

                            <div id="ataques">
                                <Ataque nome="Chicote de UX" icone={ataqueFolha} tipo="Folha" cor="rgba(99, 188, 90, 1)" dano={10} setPercentVida={setPercentVida} setAtaque={setAtaque}/>
                                <Ataque nome="Teste Navalha" icone={ataqueVenenoso} tipo="Venenoso" cor="rgba(181, 103, 206, 1)" dano={20} setPercentVida={setPercentVida} setAtaque={setAtaque}/>
                            </div>
                        </div>
                    </div>
                );
            }

            case 1: {
                return(
                    <div class="divPrincipal">
                        <NavBar/>

                        {/*Div com os Pokémons*/}
                        <div id="pokemons">
                            <Pokemon imagem={Charmander} altura="180" nome="Charmander" tamanho={100} posicao={-10}/>
                            <img id="vs" src={Vs} alt="Imagem de Versus abreviado para VS"/>
                            <Pokemon imagem={Pikachu} altura="500" nome="Pikachu" tamanho={percentVida} posicao={245} ataque={ataque}/>
                        </div>

                        {/*Card com as opções de Ataque*/}
                        <div id="cardBatalha">
                            <div id="descricao">
                                <p>O que o seu Pokémon vai fazer?</p>
                                <NomePokemonCardBatalha nome="Charmander" icone/>
                            </div>

                            <div id="ataques">
                                <Ataque nome="Reutilizar" icone={ataqueFogo} tipo="Fogo" cor="rgba(255, 157, 85, 1)" dano={10} setPercentVida={setPercentVida} setAtaque={setAtaque}/>
                                <Ataque nome="PixelBlast" icone={ataqueFogo} tipo="Fogo" cor="rgba(255, 157, 85, 1)" dano={20} setPercentVida={setPercentVida} setAtaque={setAtaque}/>
                            </div>
                        </div>
                    </div>
                );
            }

            case 2: {
                return(
                    <div class="divPrincipal">
                        <NavBar/>

                        {/*Div com os Pokémons*/}
                        <div id="pokemons">
                            <Pokemon imagem={Squirtle} altura="172" nome="Squirtle" tamanho={100} posicao={-10}/>
                            <img id="vs" src={Vs} alt="Imagem de Versus abreviado para VS"/>
                            <Pokemon imagem={Pikachu} altura="500" nome="Pikachu" tamanho={percentVida} posicao={245} ataque={ataque}/>
                        </div>

                        {/*Card com as opções de Ataque*/}
                        <div id="cardBatalha">
                            <div id="descricao">
                                <p>O que o seu Pokémon vai fazer?</p>
                                <NomePokemonCardBatalha nome="Squirtle" icone/>
                            </div>

                            <div id="ataques">
                                <Ataque nome="Jato Responsivo" icone={ataqueAgua} tipo="Agua" cor="rgba(80, 144, 214, 1)" dano={10} setPercentVida={setPercentVida} setAtaque={setAtaque}/>
                                <Ataque nome="Hidroscreen" icone={ataqueAgua} tipo="Agua" cor="rgba(80, 144, 214, 1)" dano={20} setPercentVida={setPercentVida} setAtaque={setAtaque}/>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
} 