import React from 'react';

class Opcion extends React.Component {
    render(){
        const {link, name} = this.props.opcion
        return (
            <li>
                <a href={link}>{name}</a>
            </li>
        )

    }
}

export default Opcion;