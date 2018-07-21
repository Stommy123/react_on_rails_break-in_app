import React, { Component, PropTypes } from 'react'
import mapboxgl from 'mapbox-gl';

class MapBox extends Component {

  componentDidMount() {
    //api key
      mapboxgl.accessToken = 'pk.eyJ1Ijoic3RvbW15NDkiLCJhIjoiY2pqcm1ub3F3OG03dTNxbzZ6ZXJ4NHExaiJ9.4aFNxi2NordCBv36GUI3Mw'
   //initialize map
      var map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-80.2044, 25.8028],
      zoom: [15]
      })
      //navigation
      var nav = new mapboxgl.NavigationControl();
      map.addControl(nav, 'top-right');
      //geolocating
      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));
      let popup = new mapboxgl.Popup()
      let marker = new mapboxgl.Marker()
      .setLngLat([-80.2044, 25.8028])
      .addTo(map);

    }
  render() {
    return (
      <div><br/>
      <div className='Map' ref={(x) => { this.container = x }}>
      hello
      </div>
      </div>
    )
  }
}

export default MapBox
