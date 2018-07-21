import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RvbW15NDkiLCJhIjoiY2pqcm1ub3F3OG03dTNxbzZ6ZXJ4NHExaiJ9.4aFNxi2NordCBv36GUI3Mw'

const InitMap = async(mapContainer, addDirectionLoc, handleDirectionClick) =>{
  let geoLoc;
  let map;
  navigator.geolocation.getCurrentPosition(async (position) => {
    geoLoc = [position.coords.longitutde, position.coords.latitude];
    //initialize map
    map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: geoLoc,
      zoom: 12
    });
    //nav control
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');
    //Geolocate
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

  })

}

export default InitMap
