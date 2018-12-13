import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import ReactDOMServer from 'react-dom/server'
import Popup from './Popups.js'
import { Row } from 'mdbreact';
import Button from '@material-ui/core/Button';
export default class Map extends Component {

  constructor(){
    super();
    this.state = {
      myPlaces: [],
      upVotes: {}
    }
    window.map = this; //Inherits window.map from wherever its called
  }

  async componentDidMount() { //METHODS AND FUNCTIONS THAT WILL TAKE PLACE AFTER COMPONENT MOUNTS THE DOM
    const { data } = await axios.get('/places.json?filter=mine')
    this.setState({ myPlaces: data })
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXdlaXNzMTk4MiIsImEiOiJIeHpkYVBrIn0.3N03oecxx5TaQz7YLg2HqA' //API KEY FOR MAPBOX
    const { coordinates, geolocate } = this.props
    const geolocationOptions = {  
      enableHighAccuracy:       true,
      maximumAge:               30000,
      timeout:                  27000
    }

    const mapOptions = {
      container:      this.mapContainer,
      style:          `mapbox://styles/mapbox/streets-v9`,
      zoom:           12,
      center:         [-80.2044, 25.8028]
    }

    //IF USER DOES NOT INPUT ADDRESS FOR REPORT IT WILL USE CURRENT LOCATION
    if ("geolocation" in navigator && geolocate) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          coordinates = [position.coords.longitude, position.coords.latitude]
          mapOptions.center = coordinates
          await this.createMap(mapOptions, geolocationOptions)
        },
        // failure callback
        async () => { await this.createMap(mapOptions, geolocationOptions) },
        geolocationOptions
      );
    } else{ await this.createMap(mapOptions, geolocationOptions) }
  }

  //INITIALIZE MAPS
  createMap = (mapOptions, geolocationOptions) => {
    this.map = new mapboxgl.Map(mapOptions);
    const map = this.map;

    //APPENDS SEARCH BAR NAVIGATOR
    map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken }))
    //APPENDS GEOLOCATOR BUTTON
    map.addControl(
      new mapboxgl.GeolocateControl({ positionOptions: geolocationOptions, trackUserLocation: true })
    )
    //APPEND EASY ZOOM IN / ZOOM OUT CONTROLS
    map.addControl(
      new mapboxgl.NavigationControl({ positionOptions: geolocationOptions, trackUserLocation: true })
    )
    //ON MAP LOAD, ADD ALL PLACE MARKERS FROM .JSON DATA
    map.on('load', () => {
      this.fetchPlaces()
      //AFTER MAP SETTLES, FETCH NEW PLACE
      map.on('moveend', () => this.fetchPlaces())
    })
  }

  //METHOD THAT MAKES AXIOS REQUEST FOR PLACES.JSON
  fetchPlaces = async () => {
    const map = this.map;
    const { lat, lng } = map.getCenter()
    const { data } = await axios.get(`places.json?lat=${lat}&lng=${lng}`)
    const newMarkers = data
    const { upVotes } = this.state
    newMarkers.features.forEach(place => {
      upVotes[place.properties.id] = 0;
      const elm = document.createElement('div')
      elm.className = `${place.properties.category}`
      const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(ReactDOMServer.renderToStaticMarkup(
        <Popup place={place.properties}></Popup>
      ))
      popup.on('open', () => {
        document.getElementById(`place_${place.properties.id}`).addEventListener('click', () => {
          document.getElementById('demo').innerHTML += "<strong>Validation: </strong> 18"
        })
      })
      const marker = new mapboxgl.Marker(elm)       //ATTACHES MARKERS TO MAP
      .setLngLat(place.geometry.coordinates)
      .setPopup(popup)
      marker.addTo(map)
    })
    this.setState({upVotes})
  }
  //ACTION FOR WHEN COMPONENT LEAVES THE DOM -- UNSAFE?
  componentWillUnmount() { this.map.remove() }
  //METHOD THAT TELLS MAP WHERE TO FLY UPON CLICK OF SAVED PLACES
  flyTo = place => {
    this.map.flyTo({
      center:     [place.longitude, place.latitude],
      bearing:    20,
      zoom:       12,
      pitch:      20
    })
  }

  render() {
    const { myPlaces } = this.state;
    return(
      <div className="w-100 p-3" id="mainMapCont">
        <div className="d-flex flex-column">
          <Row className="d-flex flex-row">
            <div className="card" id="SavedLocationCard">
              <div className="savedLocationHeader">
                Saved Locations
              </div>
              {
                myPlaces.map( place => {
                  return(
                    <ul key={place.id} className="list-group list-group-flush">
                      <li className="list-group-item"
                        key={place.id}
                        onClick={ () => { this.flyTo(place) } }
                        >
                        {place.name}
                      </li>
                      <Divider />
                    </ul>
                  );
                })
              }
            </div>
            <div className="card" id="mapContDisp">
                <div  id="mapDiv" ref={el => this.mapContainer = el}>
                  <Button id="reportbutton" type="button" variant="contained" color="secondary" data-toggle="modal" data-target="#modalSocial">Report a Crime</Button>
                </div>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}
