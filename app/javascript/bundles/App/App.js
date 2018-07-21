import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Components/NavBar.js'
import LandingPage from './Components/Landing.js';
import Test from './Components/Test.js';
import MapBox from './Components/Maps/MapBox.js'
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
   state = { reports: [] }
  componentDidMount() {
  axios.get(`/report/index.json`)
  .then((response) => {
    let reports = response.data;
    this.setState({ reports })
  })
  .catch((error) => { console.log(error) })
}
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
