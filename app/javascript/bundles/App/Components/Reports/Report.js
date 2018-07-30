import React, {Component} from 'react';
import { Container , fa, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';
import Form from './Form'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Button from '@material-ui/core/Button';




export default class ReportModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [],
      currentLocation: {lat: "", lng: ""},
      modal: false,
      modal2: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  createPlace = (place) => {
  let response = axios.post(`/places.json`, {
      place: {
        name: place.name,
        category: place.category,
        description: place.description,
        street: place.street,
        city: place.city,
        state: place.state,
        latitude: this.state.currentLocation.lat,
        longitude: this.state.currentLocation.lng
      }
    })
    let { places } = this.state;
    if(!places == null){
      places.push(response.data);
      this.setState({ places });
    }

  }

  componentDidMount() {
    const geolocationOptions = {
    //Tells Geocoder to use gps locating over ip locating
      enableHighAccuracy: true,
    //Sets maximum wait time
      maximumAge        : 30000,
      timeout           : 27000
    };

    //IF USER DOES NOT INPUT ADDRESS FOR REPORT, IT WILL USE CURRENT LOCATION
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        // success callback
        (position) => {
          axios.get(`/places.json?lat=${position.coords.latitude}&lng=${position.coords.longitude}`)
            .then((response) => {
                let places = response.data;
                this.setState({ places, currentLocation: {lat: position.coords.latitude, lng: position.coords.longitude} })
            });
        },
        // failure callback
        () => {
          axios.get(`/places.json`)
            .then((response) => {
                let places = response.data;
                this.setState({ places })
            });
        },
        geolocationOptions
      );
    } else {
      axios.get(`/places.json`)
        .then((response) => {
            let places = response.data;
            this.setState({ places })
        });
    }
 }


  render() {
      const { place } = this.state;

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
                <Button data-dismiss="modal" onClick={this.toggle2}><a className="aTag"><img className="reportButton1" src="https://i.imgur.com/cxmkNQu.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.toggle2}><a className="aTag"><img className="reportButton2" src="https://i.imgur.com/ll0kZvC.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.toggle2}><a className="aTag"><img className="reportButton3" src="https://i.imgur.com/L8UeAXg.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.toggle2}><a className="aTag"><img className="reportButton4" src="https://i.imgur.com/LnRmyVs.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.toggle2}><a className="aTag"><img className="reportButton5" src="https://i.imgur.com/ll0kZvC.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.toggle2}><a className="aTag"><img className="reportButton6" src="https://i.imgur.com/GsQxdcz.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.toggle2}><a className="aTag"><img className="reportButton7" src="https://i.imgur.com/Kfp5yRJ.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.toggle2}><a className="aTag"><img className="reportButton8" src="https://i.imgur.com/w4pPu1L.png"/></a></Button>
             </div>
             <div className="modal-footer">
              <Button type="button" color="secondary" className=" btn btn-primary red darken-3 white-text">Save Report</Button>
             </div>
          </div>
        </div>
      </div>
      <Modal isOpen={this.state.modal2} >
        <ModalHeader toggle={this.toggle2}>Report!</ModalHeader>
        <ModalBody>
          <Form createPlace={this.createPlace} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle2}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </Container>
    );
  }
}
