import React, { Component } from "react";
import Cabecera from "./components/Cabecera";
import Cuerpo from "./components/Cuerpo";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecera titulo={"Aprendiendo React"} />
        <div>
          <Cuerpo />
        </div>
      </div>
    );
  }
}

export default App;
