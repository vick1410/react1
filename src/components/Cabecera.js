import React from "react";
import Lista from "./Lista";

const Cabecera = props => {
  const lista = [
    { nombre: "Inicio", descripcion: "Primer pagina" },
    { nombre: "Contactenos", descripcion: "Datos importantes del sitio" }
  ];

  return (
    <header>
      <h1>{props.titulo}</h1>
        {Object.keys(lista).map(key => (
        <Lista key={key} lista={lista[key]} />
      ))}
    </header>
  );
};
export default Cabecera;
