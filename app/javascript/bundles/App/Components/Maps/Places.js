import React, { Component } from 'react'
import Map from './Map';
import ReportModal from '../Reports/Report';
import Button from '@material-ui/core/Button';
import Nav from '../NavBar.js'
import axios from 'axios';


//STYLING FOR EACH POP UP DRAWER


export default class Places extends Component {

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
    return (
      <div className="mapConsolidate">
        <Nav />
				<div className="bottomModule"></div>
				<Map />
				<ReportModal/>
				<Button type="button" variant="contained"  color="secondary" data-toggle="modal" data-target="#modalSocial">Report a Crime</Button>
    </div>
    );
	}
}
