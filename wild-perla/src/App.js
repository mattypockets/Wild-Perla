import React, { Component } from 'react';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Contact from './Components/Contact';
import Foot from './Components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={ Welcome } />
          <Route path='/about/' component={ About } />
          <Route path='/contact/' component={ Contact } />
          <Foot />
        </div>
      </Router> 
    );
  }
}

export default App;
