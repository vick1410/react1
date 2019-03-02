
import React, { Component } from "react";
import Cabecera from "./components/Cabecera";
import Cuerpo from "./components/Cuerpo";
import Menu from './components/Menu'
import Pie from './components/Pie'

import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecera titulo={"Aprendiendo React"} />
        <div className="container">
          <Menu></Menu>
          <Cuerpo></Cuerpo>
        </div>
        <Pie></Pie>
      </div>
    );
  }
}

export default App;
