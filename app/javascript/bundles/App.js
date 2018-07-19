import React, { Component } from 'react';
import Nav from './App/Components/NavBar/NavBar.js'
import LandingPage from './App/Components/Landing/Landing.js';
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (

      <div className="App">
        <Nav></Nav>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
