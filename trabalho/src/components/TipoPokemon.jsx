import React from "react";

export default function TipoPokemon({ icon, type, backgroundColor }) {
    const containerStyle = {
        backgroundColor: backgroundColor || "orange",
    };

    return (
        <div className="container-type" style={containerStyle}>
            <img className="vector-type" src={icon} alt="tipoFolha" />
            <p>{type}</p>
        </div>
    );
}
