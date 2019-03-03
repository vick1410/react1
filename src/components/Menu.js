import React, { Component } from "react";
import  Opcion  from "./Opcion";
class Menu extends Component {

    render() {
        const opciones = [
            { name: 'Google', link: 'google.com' },
            { name: 'Yahoo', link: 'yahoo.com' },
            { name: 'Bing', link: 'bing.com' },
            { name: 'Presearch', link: 'presearch.com' },
        ];
        return (
            <div className="menu">
                ESTA ES EL MENU

                {Object.keys(opciones).map(e => {
                    return <Opcion key={e} opcion={opciones[e]}/>
                })}
            </div>
        )
    }
}

export default Menu;