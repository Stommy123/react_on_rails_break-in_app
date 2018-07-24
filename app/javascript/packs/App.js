import ReactOnRails from 'react-on-rails';
import ReactDOM from 'react-dom'
import App from '../bundles/App/App.js';
import MapBox from '../bundles/App/Components/Maps/MapBox.js'
import Report from '../bundles/App/Components/Report.js'
import Locations from '../bundles/App/Components/Maps/Locations.js'
import Contact from '../bundles/App/Components/Contact.js'
import Support from '../bundles/App/Components/Support.js'
import Scoreboard from '../bundles/App/Components/Score/Scoreboard.js'

ReactOnRails.register({

    App, MapBox, Report, Locations, Contact, Support, Scoreboard
});
