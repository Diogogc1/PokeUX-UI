
export default function NomePokemon(props) {
    return (
        <div className="nome-pokemon">
            <h1>{props.nome}</h1>
            <p>{props.numero}</p>
        </div>
    );
}
