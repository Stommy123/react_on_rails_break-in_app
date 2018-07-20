import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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
        <GoogleMapExample
          containerElement={ <div style={{ height: `80vw`, width: '100vw' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Test;
