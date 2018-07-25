import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

export default class Map extends Component {

  constructor(){
    super();
    window.map = this;
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXdlaXNzMTk4MiIsImEiOiJIeHpkYVBrIn0.3N03oecxx5TaQz7YLg2HqA'

    let map;
    let nav;
    let popup;
    let marker;
    let geo;
    let { coordinates, geolocate } = this.props;

    const geolocationOptions = {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    };

    const mapOptions = {
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/streets-v9`,
      zoom: 12,
      center: [-80.2044, 25.8028]
    }

    if ("geolocation" in navigator && geolocate) {
      navigator.geolocation.getCurrentPosition(
        // success callback
        (position) => {
          coordinates = [
                          position.coords.longitude,
                          position.coords.latitude
                        ];
          mapOptions.center = coordinates;
          this.createMap(mapOptions, geolocationOptions);
        },
        // failure callback
        () => { this.createMap(mapOptions, geolocationOptions) },
        geolocationOptions
      );
    }else{
      this.createMap(mapOptions, geolocationOptions);
    }
  }

  geo = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  })

  createMap = (mapOptions, geolocationOptions) => {
    this.map = new mapboxgl.Map(mapOptions);
    const map = this.map;
    const { lat, lng } = map.getCenter();
    console.log(lat, lng);
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
      })
    );
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: geolocationOptions,
        trackUserLocation: true
      })
    );
    map.addControl(
      new mapboxgl.NavigationControl({
        positionOptions: geolocationOptions,
        trackUserLocation: true
      })
    );
    map.on('load', (event) => {
      map.addSource(
        'places',
        { type: 'geojson', data: `/places.json?lat=${lat}&lng=${lng}` }
      );
      map.addLayer({ id: 'places', type: 'circle', source: 'places'});
      map.on('moveend', (e) => { this.fetchPlaces() });
      map.on('click', (e) => {
        const features = map.queryRenderedFeatures(e.point, { layers: ['places'] });
        if (!features.length) { return; }
        const feature = features[0];
        const popup = new mapboxgl.Popup()
                        .setLngLat(feature.geometry.coordinates)
                        .setHTML(`<a href='/places/${feature.properties['id']}'>${feature.properties['name']}</a>`)
                        .addTo(map);
      });
      map.on('mousemove', (e) => {
        const features = map.queryRenderedFeatures(e.point, { layers: ['places'] });
        map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      });


    });
  }

  fetchPlaces = () => {
    const map = this.map;
    const { lat, lng } = map.getCenter();
    axios.get(`/places.json?lat=${lat}&lng=${lng}`)
      .then((response) => { map.getSource('places').setData(response.data) })
      .catch((error) => { console.log(error) });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return(
      <div
        style={{width: '100%', height: '500px', backgroundColor: 'azure'}}
        ref={el => this.mapContainer = el}
      />
    );
  }
}
