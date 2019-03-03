import React, { Component } from "react";
import Libro from "./Libro";

class Cuerpo extends Component {
  state = {
    libros: []
  };

  componentDidMount() {
    //console.log('holaaaaaaaaaa!!!')
    let libros = [
      { nombre: "Java I", descripcion: "Introduccion al mundo de Java" },
      { nombre: "Mysql", descripcion: "Introduccion a Mysql" },
      { nombre: "Angular", descripcion: "Aprendiendo  Angular" },
      { nombre: "React", descripcion: "Componentes en React" }
    ];

    this.setState({
      libros
    });
  }

  agregarLibro = () => {
    const libros = { ...this.state.libros };
    const libro = {
      nombre: "Java IIII",
      descripcion: "Introduccion al mundo de Java"
    };
    libros[`libro${Date.now()}`] = libro;
    this.setState({
      libros
    });
  };

  render() {
    return (
      <div className="body">
        <h1>Listado de Libro</h1>
        <button onClick={this.agregarLibro}>Agregar </button>

        {Object.keys(this.state.libros).map(key => (
          <Libro key={key} libro={this.state.libros[key]} />
        ))}
      </div>
    );
  }
}

export default Cuerpo;
