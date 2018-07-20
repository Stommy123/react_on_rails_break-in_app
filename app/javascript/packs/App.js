import ReactOnRails from 'react-on-rails';
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from '../bundles/App/App.js';
import Test from '../bundles/App/Components/Test.js';


ReactOnRails.register({
    App, Test
});
