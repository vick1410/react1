//HERRAMIENTAS
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//COMPONETES
import Inicio from './Inicio'
import Nosotros from './Nosotros'

class Router extends Component {
    state = {  }
    render() { 
        return ( 

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    
                </Switch>
            </BrowserRouter>
         );
    }
}
 
export default Router;
