import React, { Component } from 'react';
import Nav from './Components/NavBar.js'
import LandingPage from './Components/Landing.js';
import Test from './Components/Test.js';
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Demo from './Components/Demo.js';

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
