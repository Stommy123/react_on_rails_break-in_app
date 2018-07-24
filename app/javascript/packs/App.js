import ReactOnRails from 'react-on-rails';
import ReactDOM from 'react-dom'
import App from '../bundles/App/App.js';
import Report from '../bundles/App/Components/Report.js'
import Places from '../bundles/App/Components/Maps/Places.js'
import Contact from '../bundles/App/Components/Contact.js'
import About from '../bundles/App/Components/About.js'
import Scoreboard from '../bundles/App/Components/Scoreboard.js'
import Savedspots from '../bundles/App/Components/Savedspots.js'


ReactOnRails.register({

    App, Report, Places, Contact, About, Scoreboard, Savedspots

});
