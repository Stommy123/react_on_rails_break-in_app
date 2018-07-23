import React, { Component, PropTypes } from 'react'
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Form from '../Form.js';
import NavBar from '../NavBar.js';
import {initMap} from './InitMap.js';
import Report from '../Report.js';
import Flash from '../Flash.js';




export default class MapBox extends Component {

	constructor(){
		super();
		this.state= {
       map:{},
       reports: [],
       flash: {
         message: '',
         open: false,
         type: ''
       }
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
        const flash = {
          open: true,
          message: 'Report Created Successfully',
          type: 'notice'
        };
        reports.push(response.data);
        this.setState({ reports, flash });
      })
      .catch((error) => {
        const flash = {
          open: true,
          message: error.response.data.join(', '),
          type: 'alert'
        };
        this.setState({ flash });
      })
  }

  deleteReport = (report) => {
  let { reports } = this.state;
  axios.delete(`/report/${report.id}.json`)
    .then((response) => {
      reports = reports.filter((report) => {
        return report.id !== response.data.id
      });
      const flash = {
        open: true,
        message: 'Task Deleted Successfully',
        type: 'alert'
      };
      this.setState({ reports, flash });
    })
    .catch((error) => { console.log(error) })
}


	render() {
		return (
			<div><br />
      <NavBar />

      <div id="report-div">
      <Report reports={this.state.reports} deleteReport={this.deleteReport} />
      </div>
      <Form createReport={this.createReport} />
				<div id="mapContainer" style={{ position: "relative", }}>
					<div style={this.mapStyle} ref={el => this.mapContainer = el} />
				</div>
        <div id='info'></div>
          <Flash
            message={ this.state.flash.message }
            open={ this.state.flash.open}
            type={ this.state.flash.type }
            />
			</div>
		)
	}
}
