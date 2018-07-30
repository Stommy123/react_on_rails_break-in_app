import React, { Component } from 'react'
import Map from './Map';
import ReportModal from '../Reports/Report';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink } from 'mdbreact';
import { Container } from '../../../../../../node_modules/semantic-ui-react';
import Nav from '../NavBar.js'
import axios from 'axios';


//STYLING FOR EACH POP UP DRAWER
const styles = {
  list: {
    width: 275,
  }
};

class Places extends Component {

	state = {
    places: [],
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

     //IF USER DOES NOT INPUT ADDRESS FOR REPORT, IT WILL USE CURRENT LOCATION
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


	render() {
		const { classes } = this.props;
    return (
      <div>
        <Nav />
				<div className="bottomModule"></div>
				<Map />
				<ReportModal/>
				<Button type="button" variant="contained" className={classes.button} color="secondary" data-toggle="modal" data-target="#modalSocial">Report a Crime</Button>
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
