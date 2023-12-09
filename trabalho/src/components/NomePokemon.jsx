
export default function NomePokemon(props) {
    return (
        <div className="nome-pokemon">
            <h1 className="nome1-pokemon">{props.nome}</h1>
            <p className="numero-pokemon">{props.numero}</p>
        </div>
    );
}
