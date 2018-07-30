import React, {Component} from 'react';
import { Container , fa, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';
import Form from './Form'
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class ReportModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [],
      categories: {
        category: ''
      },
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


  handleActivity = (event) => {
    event.preventDefault();
    let { categories } = this.state;
    categories = { category: 'Suspicious-Activity' }
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleArson = (event) => {
    event.preventDefault();
    let { categories } = this.state;
    categories = { category: 'Arson' }
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleVehicle = (event) => {
    event.preventDefault();
    let { categories } = this.state;
    categories = { category: 'Vehicle-Related' }
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleViolence = (event) => {
    event.preventDefault();
    let { categories } = this.state;
    categories = { category: 'Violence' }
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleDrugs = (event) => {
    event.preventDefault();
    let { categories } = this.state;
    categories = { category: 'Drugs' }
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleCrime = (event) => {
    event.preventDefault();
    let { categories } = this.state;
    categories = { category: 'Crime' }
    this.setState({ categories, modal2: !this.state.modal2 });
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
      this.setState({ places, modal2: !this.state.modal2 });
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
                <Button data-dismiss="modal" onClick={this.handleActivity}><a className="aTag"><img className="reportButton" src="https://i.imgur.com/cxmkNQu.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.handleCrime}><a className="aTag"><img className="reportButton" src="https://i.imgur.com/Kfp5yRJ.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.handleArson}><a className="aTag"><img className="reportButton" src="https://i.imgur.com/ll0kZvC.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.handleVehicle}><a className="aTag"><img className="reportButton" src="https://i.imgur.com/L8UeAXg.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.handleDrugs}><a className="aTag"><img className="reportButton" src="https://i.imgur.com/GsQxdcz.png"/></a></Button>
                <Button data-dismiss="modal" onClick={this.handleViolence}><a className="aTag"><img className="reportButton" src="https://i.imgur.com/LnRmyVs.png"/></a></Button>
             </div>
             <div className="modal-footer">
              <Button type="button" color="secondary" className=" btn btn-primary red darken-3 white-text">Save Report</Button>
             </div>
          </div>
        </div>
      </div>
      <Modal isOpen={this.state.modal2} >
        <ModalHeader className="form-header" toggle={this.toggle2}>Fill Out Your Report Form</ModalHeader>
        <ModalBody>
          <Form categories={this.state.categories} createPlace={this.createPlace} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle2}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </Container>
    );
  }
}
