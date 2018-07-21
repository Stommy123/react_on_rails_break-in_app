import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import GeoLocation from "react-geolocation";



// const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
//
// const showPosition = (position) => {
//   position1 = position.coords.latitude
//   position2 = position.coords.longitude
// }

class Test extends Component {
   render() {


   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 25.8028, lng: -80.2044 } }
        defaultZoom = { 12 }
      >
      <div className="marker" style={{height: '10px', width: '10px' }}>
      <Marker
        icon={{url: 'https://i.imgur.com/H64rnal.png'}}
        position={{ lat: 25.8028, lng: -80.2044 }}
        style={{ height: '10px', width: '10px' }}
        />
      </div>
      </GoogleMap>
   ));
   return(
      
      <div>
        <GeoLocation />
        <GoogleMapExample
          containerElement={ <div style={{ height: `80vh`, width: '100vw' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Test;
