import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Hero from "./components/Jumbotron";
import Particle from "./components/Particles";

import './App.css';

function App() {
  return (
    // <div className="App">
      
    // </div>
    <div className="App" >
      <div >
        <Particle />
      </div>
      {/* <Particle /> */}
      <div className="App-header">
        <p>
          Hello, I'm Giovanni Noisy
        </p>
      </div>
      <Header />
    </div>
  );
}

export default App;
