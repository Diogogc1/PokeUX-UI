import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Bulbassaur from './images/bulbasaur1.png';
import Leaf from './images/Vector-leaf.png';
import Poison from './images/Vector-poison.png'
import NomePokemon from './components/NomePokemon';
import TipoPokemon from './components/TipoPokemon';
import Ataque from './components/Ataque';
import NomeAtaque from './components/NomeAtaque';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='body'>
        <Card>
          <Link id='linkRota' to={"/batalha"}>
          <div className="header-card">
            <img className="img-pokemon" src={Bulbassaur} alt="Bulbassaur" />
          </div>
          <div>
            <NomePokemon nome={"Bulbassauro"} numero={"Nº001"} />
            <div className='tipo-pokemon-container'>
              <TipoPokemon icon={Leaf} type={"Research"} backgroundColor="#63BC5A" />
              <TipoPokemon icon={Poison} type={"Teste"} backgroundColor="#B567CE" />
            </div>
            <div className='descricao-pokemon'>
              <p>Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce de acordo com a melhoria de UX.</p>
              <hr></hr>
            </div>
            <div>
              <Ataque></Ataque>
              <div className='nome-ataque-container'>
                <NomeAtaque nomeAtaque={"Chicote de UX"} />
                <NomeAtaque nomeAtaque={"Teste Navalha"} />
              </div>
            </div>
          </div>
          </Link>
        </Card>
        <Card>
          <div className="header-card">
            <img className="img-pokemon" src={Bulbassaur} alt="Bulbassaur" />
          </div>
          <div>
            <NomePokemon nome={"Charmander"} numero={"Nº002"} />
            <div className='tipo-pokemon-container'>
              <TipoPokemon icon={Leaf} type={"Research"} backgroundColor="#63BC5A" />
              <TipoPokemon icon={Poison} type={"Teste"} backgroundColor="#B567CE" />
            </div>
            <div className='descricao-pokemon'>
              <p>Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce de acordo com a melhoria de UX.</p>
              <hr></hr>
            </div>
            <div>
              <Ataque></Ataque>
              <div className='nome-ataque-container'>
                <NomeAtaque nomeAtaque={"Chicote de UX"} />
                <NomeAtaque nomeAtaque={"Teste Navalha"} />
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

export default App;
