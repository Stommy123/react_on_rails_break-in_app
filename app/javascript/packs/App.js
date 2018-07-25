import ReactOnRails from 'react-on-rails';
import ReactDOM from 'react-dom'
import App from '../bundles/App/App.js';
import Places from '../bundles/App/Components/Maps/Places.js'
import Contact from '../bundles/App/Components/Contact.js'
import About from '../bundles/App/Components/About.js'
import Scoreboard from '../bundles/App/Components/Scoreboard.js'
import Savedspots from '../bundles/App/Components/Savedspots.js'


ReactOnRails.register({
  //REGISTER COMPONENTS BEFORE USING!
    App, Places, Contact, About, Scoreboard, Savedspots

});
