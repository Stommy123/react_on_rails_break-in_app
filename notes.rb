results = Geocoder.search("Paris")
results.first.coordinates
=> [48.856614, 2.3522219]  # latitude and longitude


<html>
<body>

<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Try It</button>

<p id="demo"></p>

<script>
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
</script>

</body>
</html>




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

// <ul>
//   {this.state.reports.map((reports) => {
//     return(
//       <li key={reports.id}>{reports.description}</li>
//     )
//   })}
// </ul>




<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>Add custom icons with Markers</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
    </style>
</head>
<body>

<style>
.marker {
    display: block;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
}
</style>

<div id='map'></div>

<script>

#CUSTOM MARKERS
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RvbW15NDkiLCJhIjoiY2pqcm1ub3F3OG03dTNxbzZ6ZXJ4NHExaiJ9.4aFNxi2NordCBv36GUI3Mw';
var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": [60, 60]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -66.324462890625,
                    -16.024695711685304
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Bar",
                "iconSize": [50, 50]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.2158203125,
                    -15.97189158092897
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Baz",
                "iconSize": [40, 40]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.29223632812499,
                    -18.28151823530889
                ]
            }
        }
    ]
};


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-65.017, -16.457],
    zoom: 5
});

// add markers to map
geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    el.addEventListener('click', function() {
        window.alert(marker.properties.message);
    });

    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});
</script>

</body>
</html>


<div id="report-div">
<Report reports={this.state.reports} deleteReport={this.deleteReport} />
</div>
<Form createReport={this.createReport} />

<Flash
  message={ this.state.flash.message }
  open={ this.state.flash.open}
  type={ this.state.flash.type }
  />



  #OLD MAP BOX
  import React, { Component, PropTypes } from 'react'
  import mapboxgl from 'mapbox-gl';
  import axios from 'axios';
  import Form from '../Form.js';
  import {initMap} from './InitMap.js';





  export default class MapBox extends Component {

  	constructor(){
  		super();
  		this.state= {
         map:{},
         reports: [],
       }

  		this.mapStyle = {
  			position: 'absolute',
  			top: 0,
  			bottom: 0,
  			width: '100%'
  		};

  	}


  	componentDidMount() {
      axios.get('/report.json')
      .then((response) => {
        let reports = response.data;
        this.setState({ reports })
      })
  		let map = initMap(this.mapContainer);
  		this.setState({map});
  	}

    createReport = (report) => {
      axios.post(`/report.json`, {
          report: {
            description: report.description,
            category: report.category
          }
        },
      )
        .then((response) => {
          let { reports } = this.state;
          reports.push(response.data);
          this.setState({ reports });
        })
        .catch((error) => {
          const flash = {
            open: true,
            message: error.response.data.join(', '),
            type: 'alert'
          };
        })
    	}


  	render() {

  		return (
  			<div id='main'>

  				<div id="mapContainer" style={{ position: "relative", }}>
  					<div style={this.mapStyle} ref={el => this.mapContainer = el}></div>
  				</div>

  			</div>
  		)
  	}
  }
