import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import React from 'react';
import ReactDOMServer from 'react-dom/server'

//api key
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RvbW15NDkiLCJhIjoiY2pqcm1ub3F3OG03dTNxbzZ6ZXJ4NHExaiJ9.4aFNxi2NordCBv36GUI3Mw'

const initMap = (mapContainer) => {

  let map;
  let nav;
  let popup;
  let marker;
   //initialize map
  map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-80.2044, 25.8028],
      zoom: 15
  });
  //navigation
  nav = new mapboxgl.NavigationControl();
      map.addControl(nav, 'top-right');
      //geolocating
      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));

  //popup
  popup = new mapboxgl.Popup({ offset: 25 })
  .setText('This is a popup!');
  //marker
  marker = new mapboxgl.Marker()
  .setLngLat([-80.2044, 25.8028])
  .setPopup(popup)
  .addTo(map);
  
  //lat & lng indicator
  map.on('mousemove', function (e) {
  document.getElementById('info').innerHTML =
  // e.point is the x, y coordinates of the mousemove event relative
  // to the top-left corner of the map
  JSON.stringify(e.point) + '<br />' +
  // e.lngLat is the longitude, latitude geographical position of the event
  JSON.stringify(e.lngLat);
  });

  return map;
}

export {initMap}
