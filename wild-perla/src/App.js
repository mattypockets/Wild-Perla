import React, { Component } from 'react';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Welcome />
          <About />
          <Contact />
        </div>
    );
  }
}

export default App;
