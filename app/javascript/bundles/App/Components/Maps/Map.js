import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import ReactDOMServer from 'react-dom/server'
import Popup from './Popups.js'
import { Container, Fa, Row, Col, ListGroup, ListGroupItem } from 'mdbreact';
import ReportModal from '../Reports/Report';
import Button from '@material-ui/core/Button';

export default class Map extends Component {

//Inherits window.map from wherever its called
  constructor(){
    super();
    this.state = {
      myPlaces: [],
      upVotes: {}
    };
    window.map = this;
  }


//METHODS AND FUNCTIONS THAT WILL TAKE PLACE AFTER COMPONENT MOUNTS THE DOM
  async componentDidMount() {
    await axios.get('/places.json?filter=mine')
      .then( (response) => { this.setState({ myPlaces: response.data } ) } )
      .catch( (error) => { console.log(error) } )
//API KEY FOR MAPBOX
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXdlaXNzMTk4MiIsImEiOiJIeHpkYVBrIn0.3N03oecxx5TaQz7YLg2HqA'

    let { coordinates, geolocate } = this.props;

    //OPTIONS FOR BUILT IN GEOLOCATOR BUTTON
    const geolocationOptions = {
    //Tells Geocoder to use gps locating over ip locating
      enableHighAccuracy: true,
    //Sets maximum wait time
      maximumAge        : 30000,
      timeout           : 27000
    };

    //OPTIONS FOR MAPBOX COMPONENT
    const mapOptions = {
      //DEFINES CONTAINER
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/streets-v9`,
      zoom: 12,
      center: [-80.2044, 25.8028]
    }

    //IF USER DOES NOT INPUT ADDRESS FOR REPORT IT WILL USE CURRENT LOCATION
    if ("geolocation" in navigator && geolocate) {
      navigator.geolocation.getCurrentPosition(
        // success callback
        async (position) => {
          coordinates = [
                          position.coords.longitude,
                          position.coords.latitude
                        ];
          mapOptions.center = coordinates;
          await this.createMap(mapOptions, geolocationOptions);
        },
        // failure callback
        async () => { await this.createMap(mapOptions, geolocationOptions) },
        geolocationOptions
      );
    } else{
      await this.createMap(mapOptions, geolocationOptions);
    }
  }

  //INITIALIZE MAPS
  createMap = (mapOptions, geolocationOptions) => {
    this.map = new mapboxgl.Map(mapOptions);
    const map = this.map;
    //CENTERS MAP - REFER TO MAP-OPTIONS
    const { lat, lng } = map.getCenter();
    console.log(lat, lng);


    //APPENDS SEARCH BAR NAVIGATOR
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
      })
    );

    //APPENDS GEOLOCATOR BUTTON
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: geolocationOptions,
        trackUserLocation: true
      })
    );
    //APPEND EASY ZOOM IN / ZOOM OUT CONTROLS
    map.addControl(
      new mapboxgl.NavigationControl({
        positionOptions: geolocationOptions,
        trackUserLocation: true
      })
    );
    //ON MAP LOAD, ADD ALL PLACE MARKERS FROM .JSON DATA
    map.on('load', (event) => {
      this.fetchPlaces();
      //AFTER MAP SETTLES, FETCH NEW PLACE
      map.on('moveend', (e) => {
        this.fetchPlaces();
       });
    });
  }

  //METHOD THAT MAKES AXIOS REQUEST FOR PLACES.JSON
  fetchPlaces = () => {
    const map = this.map;
    const self = this;
    const { lat, lng } = map.getCenter();
    axios.get(`places.json?lat=${lat}&lng=${lng}`)
      .then((res) => {
        let newMarkers = res.data
        let {upVotes} = this.state;
        newMarkers.features.forEach(function (place, i, j) {
          upVotes[place.properties.id] = 0;
          var elm = document.createElement('div');
          elm.className = `${place.properties.category}`;
          let popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(ReactDOMServer.renderToStaticMarkup(
            <Popup place={place.properties}></Popup>
          ))
          popup.on('open', (e) => {
            document.getElementById(`place_${place.properties.id}`).addEventListener('click', function() {
              document.getElementById('demo').innerHTML += "<strong>Validation: </strong> 18"
            });
          })
          //ATTACHES MARKERS TO MAP
          let marker = new mapboxgl.Marker(elm)
          .setLngLat(place.geometry.coordinates)
          .setPopup(popup);
          marker.addTo(map);
        })
        this.setState({upVotes});
      })
      .catch((error) => {console.log(error)})
  }

  handleUpvote = (id) => {
    let {upVotes} = this.state;
    upVotes[id] += 1;
    this.setState({upVotes});
    console.log(upVotes);
  }

  //ACTION FOR WHEN COMPONENT LEAVES THE DOM -- UNSAFE?
  componentWillUnmount() {
    this.map.remove();
  }

  //METHOD THAT TELLS MAP WHERE TO FLY UPON CLICK OF SAVED PLACES
  flyTo = (place) => {
    this.map.flyTo({
      center: [place.longitude, place.latitude],
      bearing: 20,
      zoom: 12,
      pitch: 20
    })
  }

  render() {
    const { myPlaces } = this.state;
    return(
      <div className="w-100">
        <div className="d-flex flex-column">
          <Row className="d-flex flex-row">
            <div className="card" id="mapCard">
              <div className="savedLocationHeader">
                Saved Locations
              </div>
              {
                myPlaces.map( (place) => {
                  return(
                    <ul key={place.id} className="list-group list-group-flush">
                      <li className="list-group-item"
                        key={place.id}
                        onClick={ (e) => { this.flyTo(place) } }
                        >
                        {place.name}
                      </li>
                    </ul>
                  );
                })
              }
            </div>
            <div className="card" id="mapContDisp">
              <div>
                <div  id="mapDiv" ref={el => this.mapContainer = el}>
                </div>
                <Button id="reportbutton" type="button" variant="contained" color="secondary" data-toggle="modal" data-target="#modalSocial">Report a Crime</Button>
              </div>
              </div>
          </Row>
        </div>
      </div>
    );
  }
}
