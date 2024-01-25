import iconEspada from '../images/Frame.png'

export default function Ataque(){
    return(
        <div className='ataque-header'>
            <img className='icon-espada' src={iconEspada} alt='Icone de uma espada'></img>
            <p>ATAQUES</p>
        </div>
    )
}