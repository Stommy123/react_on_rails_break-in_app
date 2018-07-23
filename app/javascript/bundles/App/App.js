import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Components/NavBar.js'
import LandingPage from './Components/Landing.js';
import MapBox from './Components/Maps/MapBox.js'
import ReactDOM from 'react-dom'
import Form from './Components/Form.js'
import Report from './Components/Report.js'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


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
