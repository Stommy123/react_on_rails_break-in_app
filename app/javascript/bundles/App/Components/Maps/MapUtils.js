import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import MapPopup from './MapPopup';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RvbW15NDkiLCJhIjoiY2pqcm1ub3F3OG03dTNxbzZ6ZXJ4NHExaiJ9.4aFNxi2NordCBv36GUI3Mw'

const getVendors = async (geoLoc) => {
  return await axios.get(`/vendors?long=${geoLoc[0]}&lat=${geoLoc[1]}`)
}

const initMap = async(mapContainer, addDirectionLoc, handleDirectionClick) =>{
  let geoLoc;
  let map;
  // @todo make geolocation util, return map
  navigator.geolocation.getCurrentPosition(async (position) => {
    // get current location
    geoLoc = [position.coords.longitude, position.coords.latitude];
    // initialize map
    map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: geoLoc,
      zoom: 12
    });
    // add Nav control
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');
    // add GeoLocate
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    // add markers to map
    let res = await getVendors(geoLoc);
    let geojson = res.data;
    geojson.features.forEach(function (vendor,i) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
      // make a marker for each feature and add to the map
      let popupId = `popup-${i}`
      let popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(ReactDOMServer.renderToStaticMarkup(
          <MapPopup
            styleName={popupId}
            vendor={vendor}
          />))
      popup.on('open', (e)=>{
        // addDirectionLoc(e.target._lngLat);
        document.getElementById(popupId).addEventListener('click', async (f)=>{
          let routeData = await handleDirectionClick(e.target._lngLat);
          // console.log('responseRoute', routeData);
          addDirections(map, routeData, document);
        });
      });
      let marker = new mapboxgl.Marker(el)
        .setLngLat(vendor.geometry.coordinates)
        // add popups
        .setPopup(popup);
      marker.addTo(map);
      return map;
    });
  });
}

const addDirections = (map, routeData, document) => {
  let {data} = routeData;
  let route = data.routes[0].geometry;
  map.addLayer({
    id: 'route',
    type: 'line',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: route
      }
    },
    paint: {
      'line-width': 2
    }
  });
  let start = data.waypoints[0].location;
  let end = data.waypoints[1].location;
  let startLayer = {
    id: 'start',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: start
        },
        properties: {}
      }
    }
  }
  map.addLayer(startLayer);
  map.addLayer({
    id: 'end',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: end
        }
      }
    }
  });
  var instructions = document.getElementById('instructions');
  instructions.className = "visible";
  var steps = data.routes[0].legs[0].steps;
  steps.forEach(function(step) {
    instructions.insertAdjacentHTML('beforeend', '<p>' + step.maneuver.instruction + '</p>');
  });
}


export {initMap}
