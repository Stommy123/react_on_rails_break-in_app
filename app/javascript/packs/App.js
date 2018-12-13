import ReactOnRails from 'react-on-rails';
import 'babel-polyfill'
import App from '../bundles/App/App.js';
import Places from '../bundles/App/Components/Maps/Places.js'
import Contact from '../bundles/App/Components/Support/Contact.js'
import About from '../bundles/App/Components/Support/About.js'
import Scoreboard from '../bundles/App/Components/Scores/Scoreboard.js'

ReactOnRails.register({ App, Places, Contact, About, Scoreboard })   //REGISTER COMPONENTS BEFORE USING!
