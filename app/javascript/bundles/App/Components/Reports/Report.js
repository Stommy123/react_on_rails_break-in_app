import React, {Component} from 'react';
import { Container, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import Form from './Form'
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class ReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      categories: { category: '' },
      currentLocation: {lat: "", lng: ""},
      modal: false,
      modal2: false
    };
  }

  toggle = () => this.setState({ modal: !this.state.modal })
  toggle2 = () => this.setState({ modal2: !this.state.modal2 })

  handleActivity = event => {
    event.preventDefault();
    const { categories } = this.state;
    categories.category = 'Suspicious-Activity' 
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleArson = event => {
    event.preventDefault();
    const { categories } = this.state;
    categories.category = 'Arson' 
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleVehicle = event => {
    event.preventDefault();
    const { categories } = this.state;
    categories.category = 'Vehicle-Related' 
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleViolence = event => {
    event.preventDefault();
    const { categories } = this.state;
    categories.category = 'Violence' 
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleDrugs = event => {
    event.preventDefault();
    const { categories } = this.state;
    categories.category = 'Drugs' 
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  handleCrime = event => {
    event.preventDefault();
    const { categories } = this.state;
    categories.category = 'Crime' 
    this.setState({ categories, modal2: !this.state.modal2 });
  }

  createPlace = async place => {
  const { data } = await axios.post(`/places.json`, {
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
    const { places } = this.state;
    if (places) places.push(data);
    this.setState({ places });
  }

  render() {
    return (
      <Container className="modalContainer">
        <div className="modal fade right" id="modalSocial" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm" role="document">
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
