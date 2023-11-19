import iconEspada from '../images/Frame.png'

export default function Ataque(){
    return(
        <div className='ataque-header'>
            <img className='icon-espada' src={iconEspada}></img>
            <p>ATAQUES</p>
        </div>
    )
}