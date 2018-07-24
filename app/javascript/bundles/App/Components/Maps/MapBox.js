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
