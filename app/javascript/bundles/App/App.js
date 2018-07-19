import React, { Component } from 'react';
import Nav from './Components/NavBar.js'
import LandingPage from './Components/Landing.js';
import Map from './Components/Map.js';
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav user={this.props.user} />
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
