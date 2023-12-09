import Iftm from '../images/IFTM.png'

export default function Footer() {
    return (
        <div className='footer-componente'>
            <img className='imgFooter' src={Iftm} alt="Logo do Iftm" />
            <div className='footer-p'>
                <p>Campus Avançado Uberaba Parque Tecnológico</p>
                <p>Análise e Desenvolvimentos de Sistemas</p>
                <p>Tecnologias de Interface para Web</p>
            </div>
        </div>
    )
}