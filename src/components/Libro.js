import React, { Component } from 'react';

class Libro extends Component {
    state = {  }
    render() { 
        const {nombre, descripcion } = this.props.libro
        return ( 
            <div>
                <h2>TITULO: {nombre}</h2>
                <p>DESCRIPCION: {descripcion}</p>
            </div>
         );
    }
}
 
export default Libro;