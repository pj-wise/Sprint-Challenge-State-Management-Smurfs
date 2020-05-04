import React, { Component } from "react";
import "./App.css";
import SmurfVillage from "./SmurfVillage";
import NewSmurfForm from "./NewSmurfForm";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfVillage />
        <NewSmurfForm />
      </div>
    );
  }
}

export default App;
