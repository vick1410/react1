import React, { Component } from "react";

class Lista extends Component {
  state = {};
  render() {
    const { nombre, descripcion } = this.props.lista;
    return (
      <div>
        <h5>{nombre}</h5>
        <p>{descripcion}</p>
      </div>
    );
  }
}

export default Lista;
