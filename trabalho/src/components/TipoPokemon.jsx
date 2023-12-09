import React from "react";

export default function TipoPokemon({ icon, type, backgroundColor }) {
    return (
        <div className="container-type" style={{backgroundColor: backgroundColor || "orange"}}>
            <img className="vector-type" src={icon} alt="tipoFolha" />
            <p>{type}</p>
        </div>
    );
}
