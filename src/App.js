import React, { Component } from 'react';
import Menu from './components/Menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecera></Cabecera>
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
