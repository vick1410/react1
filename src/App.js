//HERRAMIENTAS
import React, { Component } from "react";
//COMPONENTES
import Cabecera from "./components/Cabecera";
import Router from './components/Router'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecera />
        <div className="container">
          <Router></Router>
        </div>

      </div>
    );
  }
}

export default App;
