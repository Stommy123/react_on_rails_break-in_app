import ReactOnRails from 'react-on-rails';
import ReactDOM from 'react-dom'
import App from '../bundles/App/App.js';
import MapBox from '../bundles/App/Components/Maps/MapBox.js'
import Report from '../bundles/App/Components/Report.js'


ReactOnRails.register({
    App, MapBox, Report
});
