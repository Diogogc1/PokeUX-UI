import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Bulbassaur from './images/bulbassauro.gif';
import backGroundBulba from './images/backgroundBulbassauro.png'
import Charmander from './images/charmander.gif';
import backGroundCharmander from './images/backgroundCharmander.png'
import Leaf from './images/iconFolha.png';
import Poison from './images/Vector-poison.png'
import Chama from './images/icon_chama.png';
import Squirtle from "./images/squirtle.gif";
import backGroundSquirtle from './images/backgroundSquirtle.png'
import Gota from './images/icon_gota.png'
import NomePokemon from './components/NomePokemon';
import TipoPokemon from './components/TipoPokemon';
import Ataque from './components/Ataque';
import NomeAtaque from './components/NomeAtaque';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='body'>
        <Card>
        <Link className='linkRota' to={"/batalha0"}>
          <div className="header-card" style={{
            backgroundImage: `url(${backGroundBulba})`, backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
            <img className="img-pokemon" src={Bulbassaur} alt="Bulbassaur" />
          </div>

          <div className='body-card'>
            <NomePokemon nome={"Bulbassauro"} numero={"Nº001"} />
            <div className='tipo-pokemon-container'>
              <TipoPokemon icon={Leaf} type={"Research"} backgroundColor="#63BC5A" />
              <TipoPokemon icon={Poison} type={"Teste"} backgroundColor="#B567CE" />
            </div>
            <div className='descricao-pokemon'>
              <p className='descricao'>Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce de acordo com a melhoria de UX.</p>
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
          <Link className='linkRota' to={"/batalha1"}>
            <div className="header-card" style={{
              backgroundImage: `url(${backGroundCharmander})`, backgroundPosition: "center",
              backgroundSize: "cover"
            }}>
              <img className="img-pokemon" src={Charmander} alt="Charmander" />
            </div>
            <div className='body-card'>
              <NomePokemon nome={"Charmander"} numero={"Nº002"} />
              <div className='tipo-pokemon-container'>
                <TipoPokemon icon={Chama} type={"Componente"} backgroundColor="#FF9D55" />
              </div>
              <div className='descricao-pokemon'>
                <p className='descricao'>Tem preferência por reutilizar componentes. Quando não há padrão, diz-se que a chama da sua calda se apaga.
                </p>
                <hr></hr>
              </div>
              <div>
                <Ataque></Ataque>
                <div className='nome-ataque-container'>
                  <NomeAtaque nomeAtaque={"Jato Responsivo"} />
                  <NomeAtaque nomeAtaque={"Hidroscreen"} />
                </div>
              </div>
            </div>
          </Link>
        </Card>
        <Card>
          <Link className='linkRota' to={"/batalha2"}>
            <div className="header-card" style={{
              backgroundImage: `url(${backGroundSquirtle})`, backgroundPosition: "center",
              backgroundSize: "cover"
            }}>
              <img className="img-pokemon" src={Squirtle} alt="Squirtle" />
            </div>

            <div className='body-card'>
              <NomePokemon nome={"Squirtle"} numero={"Nº003"} />
              <div className='tipo-pokemon-container'>
                <TipoPokemon icon={Gota} type={"Responsivo"} backgroundColor="#5090D6" />
              </div>
              <div className='descricao-pokemon'>
                <p className='descricao'>Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa. Adaptativo, como todo sistema deve ser.</p>
                <hr></hr>
              </div>
              <div>
                <Ataque></Ataque>
                <div className='nome-ataque-container'>
                  <NomeAtaque nomeAtaque={"Jato responivo"} />
                  <NomeAtaque nomeAtaque={"HidroScreen"} />
                </div>
              </div>
            </div>
          </Link>
        </Card>
      </main>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;