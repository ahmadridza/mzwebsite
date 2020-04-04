import React from 'react';
import logos from './logomz.jpg'
import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About'
import Programs from './pages/Programs'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Searchbar from './components/Navbar'
import Footer from './components/Footer'
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
        <Route exact path="/about" ><About /></Route>
        <Route exact path="/programs" ><Programs /></Route>
        <Route exact path="/gallery" ><Gallery /></Route>
        <Route exact path="/events" ><Events /></Route>
        <Route exact path="/contactus" ><Contact /></Route>

        <Footer />
      </body>
    </div>
  );
}

export default App;
