import React, { Component } from "react";
import  Opcion  from "./Opcion";
class Menu extends Component {
    constructor(){
        super();
        this.opciones = [
            { name: 'Google', link: 'google.com' },
            { name: 'Yahoo', link: 'yahoo.com' },
            { name: 'Bing', link: 'bing.com' },
            { name: 'Presearch', link: 'presearch.com' },
        ]
    }

    state = {
        opciones:[]
    };

    anadeOpcion = () => {
        const opcion = { name: 'Presearch', link: 'presearch.com' };
        this.opciones.push(opcion)
        this.setState({opciones: this.opciones})
    }

    componentDidMount(){
        this.setState({opciones: this.opciones})
    }

    render() {
        return (
            <div className="menu">
                ESTA ES EL MENU

                <input type="button" value="Añadir" onClick={this.anadeOpcion}/>

                {Object.keys(this.state.opciones).map(e => {
                    return <Opcion key={e} opcion={this.state.opciones[e]}/>
                })}
            </div>
        )
    }
}

export default Menu;