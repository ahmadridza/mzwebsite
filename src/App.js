import React from 'react';
import logos from './logomz.jpg'
import './App.css';
import Homepage from './pages/Homepage';
import Searchbar from './components/Navbar'
import { Route, Link } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <img src={logos} className="App-logo" alt="logo" />

      <header className="App-header">
        <Searchbar />
      </header>
      <body>
        <p></p>
        <Route exact path="/" ><Homepage /></Route>
      </body>
    </div>
  );
}

export default App;
