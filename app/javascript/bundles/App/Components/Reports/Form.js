import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


export default class Form extends Component {

  // SETTING STATES FOR FORM DATA VALUES
  state = {
            place: {
              name: '',
              category: '',
              description: '',
              street: '',
              city: '',
              state: ''
            }
          }

//CLEARS INPUT VALUES UPON SUBMISSION
  handleSubmit = (event) => {
    event.preventDefault();
    let { place } = this.state;
    this.props.createPlace(place);
    place = {
      name: '',
      category: '',
      description: '',
      street: '',
      city: '',
      state:''
    }
    this.setState({ place });
  }


  //ALL THESE HANDLERS ALERTS THE FORMS TO CHARACTER CHANGES
  handleNameChange = (event) => {
    let { place } = this.state;
    place.name = event.target.value;
    this.setState({ place });
  }

  handleCategoryChange = (event) => {
    let { place } = this.state;
    place.category = event.target.value;
    this.setState({ place });
  }

  handleDescriptionChange = (event) => {
    let { place } = this.state;
    place.description = event.target.value;
    this.setState({ place });
  }

  handleStreetChange = (event) => {
    let { place } = this.state;
    place.street = event.target.value;
    this.setState({ place });
  }

  handleCityChange = (event) => {
    let { place } = this.state;
    place.city = event.target.value;
    this.setState({ place });
  }

  handleStateChange = (event) => {
    let { place } = this.state;
    place.state = event.target.value;
    this.setState({ place });
  }


  render(){
    const { place } = this.state;
    return(
      <Paper style={{margin: 10, padding: 10}}>
        <form
          style={{display: 'flex', flexWrap: 'wrap'}}
          noValidate
          onSubmit={ this.handleSubmit }
        >
          <Grid container spacing={24}>
            <Grid item md={8} xs={12} >
              <TextField
                label="Name"
                id="place_name"
                value={place.name}
                onChange={this.handleNameChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                label="Category"
                id="place_category"
                value={place.category}
                onChange={this.handleCategoryChange}
                margin="normal"
                InputLabelProps={{shrink: true}}
                fullWidth
                />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="Description"
                id="place_description"
                value={place.description}
                onChange={this.handleDescriptionChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="Street"
                id="place_street"
                value={place.street}
                onChange={this.handleStreetChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="City"
                id="place_city"
                value={place.city}
                onChange={this.handleCityChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="State"
                id="place_state"
                value={place.state}
                onChange={this.handleStateChange}
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={ this.handleSubmit }
            disabled={place.description.trim() === ''}
          >
          Create Report!
        </Button>
      </form>
    </Paper>
      )
    }
  }
