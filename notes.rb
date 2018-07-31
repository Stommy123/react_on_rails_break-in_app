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


  #REPORT Component
  import React, { Component } from 'react';
  import axios from 'axios';
  import Form from './Form';
  import Paper from '@material-ui/core/Paper';
  import Table from '@material-ui/core/Table';
  import TableBody from '@material-ui/core/TableBody';
  import TableCell from '@material-ui/core/TableCell';
  import TableHead from '@material-ui/core/TableHead';
  import TableRow from '@material-ui/core/TableRow';
  import Button from '@material-ui/core/Button';



  export default class Report extends Component {

    render() {
      const { reports } = this.props
      return (
        <div>
          <Paper style={{margin: 10}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>lat</TableCell>
                  <TableCell>lng</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reports.map((report) => {
                  return(
                    <TableRow key={report.id}>
                      <TableCell>{report.description}</TableCell>
                      <TableCell>{report.category}</TableCell>
                      <TableCell>{report.lat}</TableCell>
                      <TableCell>{report.lng}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
      )
    }
  }



  #OLD FORM
  <%= form_with(model: @place) do |form| %>
    <%= form.hidden_field :latitude %>
    <%= form.hidden_field :longitude %>
    <div>
      <%= form.label :name %>
      <%= form.text_field :name, required: true, class: "text_input" %>
    </div>
    <div>
      <%= form.label :category %>
      <%= form.text_field :category, required: true, class: "text_input" %>
    </div>
    <div>
      <%= form.label :description %>
      <%= form.text_field :description, required: true, class: "text_input" %>
    </div>
    <div>
      <%= form.label :street %>
      <%= form.text_field :street, class: "text_input" %>
    </div>
    <div>
      <%= form.label :city %>
      <%= form.text_field :city, class: "text_input" %>
    </div>
    <div>
      <%= form.label :state %>
      <%= form.text_field :state, class: "text_input" %>
    </div>
    <div class="field">
      <%= form.label :image %>
      <%= form.file_field :image %>
    </div>
    <div>
    <div>
      <%= form.submit %>
    </div>
  <% end %>


  import React, {Component} from 'react';
  import { Container, Button, fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
  import SwipeableViews from 'react-swipeable-views';
  import AppBar from '@material-ui/core/AppBar';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  import Typography from '@material-ui/core/Typography';
  import PropTypes from 'prop-types';

  function TabContainer(props) {
    return (
      <Typography component="div">{props.children}</Typography>
    );
  }

  TabContainer.propTypes = {
    children: PropTypes.node.IsRequired
  };

  class ModalPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        value: 0
      };
      this.toggle = this.toggle.bind(this);
    }

    handleChange = (event, value) => {
      this.setState({ value });
    };

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    render() {

      const { classes } = this.props;
      const { value } = this.state;

      return (
        <Container className="modalContainer">
          <div className="modal fade right" id="modalSocial" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm modal-full-height modal-right" role="document">
              <div className="modal-content">
                <div className="modal-header red darken-3 white-text">
                  <h4 className="title"> Pick a category!</h4>
                  <Button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                </div>
                <div className="modal-body mb-0 text-center" id="modalBody">
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab>
                    <a className="aTag"><img className="reportButton1" src="https://i.imgur.com/cxmkNQu.png"/></a>
                    <a className="aTag"><img className="reportButton2" src="https://i.imgur.com/ll0kZvC.png"/></a>
                    </Tab>
                  </Tabs>
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab >
                    <a className="aTag"><img className="reportButton3" src="https://i.imgur.com/L8UeAXg.png"/></a>
                    <a className="aTag"><img className="reportButton4" src="https://i.imgur.com/LnRmyVs.png"/></a>
                    </Tab>
                  </Tabs>
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab>
                    <a className="aTag"><img className="reportButton5" src="https://i.imgur.com/ll0kZvC.png"/></a>
                    <a className="aTag"><img className="reportButton6" src="https://i.imgur.com/GsQxdcz.png"/></a>
                    </Tab>
                  </Tabs>
                  <Tabs value={value} onChange={this.handleChange}>
                    <a className="aTag"><img className="reportButton7" src="https://i.imgur.com/Kfp5yRJ.png"/></a>
                    <a className="aTag"><img className="reportButton8" src="https://i.imgur.com/w4pPu1L.png"/></a>
                  </Tabs>
               </div>
               {value === 0 && <TabContainer>Item One</TabContainer>}
               {value === 1 && <TabContainer>Item Two</TabContainer>}
               {value === 2 && <TabContainer>Item Three</TabContainer>}
               <div className="modal-footer">
                <Button type="button" color="secondary" className=" btn btn-primary red darken-3 white-text">Save Report</Button>
               </div>
            </div>
          </div>
        </div>
      </Container>
      );
    }
  }

  ModalPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default ModalPage;

  class ScoreboardController < ApplicationController
    def index
      respond_to do |format|
        format.html
        format.json do
          @top_scores = User.order(points: :desc).limit(10)
            @top_scores = User.where.not(:points => nil).order(points: :desc).limit(10)
          render json: @top_scores
        end
      end
    end
  end
