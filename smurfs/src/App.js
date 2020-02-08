import React, { useState } from "react";
// import axios from 'axios';

// IMPORT ASSETS
import "./css/App.css";

// IMPORT CONTEXT: SmurfContext
import SmurfContext from "./context/SmurfContext";

// IMPORT APP COMPONENTS
import { SmurfList } from "./components/SmurfList";

export default function App() {

  const [ smurf, setSmurf ] = useState([]);

  return (
    <SmurfContext.Provider value={{ smurf, setSmurf }}>
      <div className="App">
        <div className="container">
          <header id="header" className="header">
            <h1>It's the SMURFS!</h1>
          </header>
          <main id="main-content" className="main-content">
            <SmurfList />
          </main>
        </div>
      </div>
    </SmurfContext.Provider>
  );

};
