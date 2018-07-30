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
              street: 'Optional',
              city: 'Optional',
              state: 'Optional'
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
    const { categories } = this.props;
    const { place } = this.state;
    return(
      <Paper style={{margin: 10, padding: 10}}>
        <form
          style={{display: 'flex', flexWrap: 'wrap'}}
          noValidate
          onSubmit={ this.handleSubmit }
        >
          <Grid container spacing={24}>
            <Grid item md={4} xs={12}>
              <TextField
                label="Category"
                id="place_category"
                value={categories.category}
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
                defaultValue="Optional"
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
                defaultValue="Optional"
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
                defaultValue="Optional"
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
