import React, { Component } from 'react';
// import './App.css';
import Nav from './App/Components/NavBar/NavBar.js'
import LandingPage from './App/Components/Landing/Landing';

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
