import ReactOnRails from 'react-on-rails';
import ReactDOM from 'react-dom'
import App from '../bundles/App/App.js';
import MapBox from '../bundles/App/Components/Maps/MapBox.js'
import Report from '../bundles/App/Components/Report.js'
import Contact from '../bundles/App/Components/Contact.js'
import Support from '../bundles/App/Components/Support.js'

ReactOnRails.register({
    App, MapBox, Report, Support, Contact
});
