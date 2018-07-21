import React, { Component } from 'react';
import axios from 'axios';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import GeoLocation from "react-geolocation";
import MapBox from './MapBox.js'



class Test extends Component {
  state = { reports: [] }
 componentDidMount() {
 axios.get(`/report/index.json`)
 .then((response) => {
   let reports = response.data;
   this.setState({ reports })
 })
 .catch((error) => { console.log(error) })
}
   render() {
     return (
       <div className="Map">
         hello
         <MapBox />
       </div>
     )

   }
};
export default Test;
