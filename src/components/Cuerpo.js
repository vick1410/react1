import React, { Component } from "react";
import Libro from "./Libro";

class Cuerpo extends Component {
  //state = {  }
  render() {
    const libros = [
      { nombre: "Java I", descripcion: "Introduccion al mundo de Java" },
      { nombre: "Mysql", descripcion: "Introduccion a Mysql" },
      { nombre: "Angular", descripcion: "Aprendiendo  Angular" },
      { nombre: "React", descripcion: "Componentes en React" }
    ];

    return (
      <div className="body">
        <h1>Listado de Libro</h1>
        {Object.keys(libros).map(key => (
          <Libro 
          key={key} 
          libro={libros[key]} />
        ))}
      </div>
    );
  }
}

export default Cuerpo;
