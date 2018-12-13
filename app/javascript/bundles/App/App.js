import React from 'react';
import Nav from './Components/NavBar.js'
import LandingPage from './Components/Landing.js';


const App = () => (
    <div className="App">
      <Nav user={this.props.user} />
      <LandingPage />
    </div>
)



export default App;
