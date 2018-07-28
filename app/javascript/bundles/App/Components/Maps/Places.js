import React, { Component } from 'react'
import Map from './Map';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink } from 'mdbreact';
import { Container } from '../../../../../../node_modules/semantic-ui-react';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';
import Nav from '../NavBar.js'
import axios from 'axios';
import Sidebar from './Sidebar.js'

//STYLING FOR EACH POP UP DRAWER
const styles = {
  list: {
    width: 275,
  }
};

class Places extends Component {

	state = {
    places: [],
    bottom: false,
    currentLocation: {lat: "", lng: ""}
  };

   componentDidMount() {
     const geolocationOptions = {
     //Tells Geocoder to use gps locating over ip locating
       enableHighAccuracy: true,
     //Sets maximum wait time
       maximumAge        : 30000,
       timeout           : 27000
     };

     if ("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition(
         // success callback
         (position) => {
           axios.get(`/places.json?lat=${position.coords.latitude}&lng=${position.coords.longitude}`)
             .then((response) => {
                 let places = response.data;
                 this.setState({ places, currentLocation: {lat: position.coords.latitude, lng: position.coords.longitude} })
             });
         },
         // failure callback
         () => {
           axios.get(`/places.json`)
             .then((response) => {
                 let places = response.data;
                 this.setState({ places })
             });
         },
         geolocationOptions
       );
     } else {
       axios.get(`/places.json`)
         .then((response) => {
             let places = response.data;
             this.setState({ places })
         });
     }
  }

 //METHOD TO OPEN AND CLOSE DRAWER -- NOT ALWAYS WORKING
  toggleDrawer = (side, open) => () => {
	   this.setState({
		     [side]: open,
	      });
      };


  createPlace = (place) => {
  let response = axios.post(`/places.json`, {
      place: {
        name: place.name,
        category: place.category,
        description: place.description,
        street: place.street,
        city: place.city,
        state: place.state,
        latitude: this.state.currentLocation.lat,
        longitude: this.state.currentLocation.lng
      }
    })
    let { places } = this.state;
    if(!places == null){
      places.push(response.data);
      this.setState({ places });
    }

  }


	render() {

		const { classes } = this.props;


		const bottomList = (

		    <div className="bottomList">
		        <div className={classes.bottomList}>
		            <div className="reportHeader">
			               <div className="reportHeaderText">Send a report</div>
		            </div>
                <Sidebar />
              </div>
        </div>
		);


    return (
      <div>
        <Nav />
				<div className="bottomModule">
				<Drawer anchor='right' open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {bottomList}
          </div>
        </Drawer>
				</div>
				<Map />
			 	<Button color='primary' id='addReport' variant="fab"  aria-label="Add" onClick={this.toggleDrawer('bottom', true)}><UpIcon /></Button><br />
        <Sidebar />
    </div>
    );
	}
}

//DEFINE PROP TYPES FOR MATERIAL UI COMPONENTS
Places.propTypes = {
  classes: PropTypes.object.isRequired,
};

//EXPORTS THIS COMPONENT WITH STYLES INTACT
export default withStyles(styles)(Places);
