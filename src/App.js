import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Jumbotron"

import './App.css';

function App() {
  return (
    // <div className="App">
      
    // </div>
    <div>
      <Hero />
      <Header />
    </div>
  );
}

export default App;
