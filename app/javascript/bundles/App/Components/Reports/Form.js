import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Form extends Component {

  state = {
            place: {
              name: '',
              category: this.props.categories.category,
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
  handleDescriptionChange = event => {
    const { place } = this.state;
    place.description = event.target.value;
    this.setState({ place });
  }
  handleNameChange = event => {
    const { place } = this.state;
    place.name = event.target.value;
    this.setState({ place });
  }
  handleCategoryChange = event => {
    const { place } = this.state;
    place.category = event.target.value;
    this.setState({ category });
  }

  handleStreetChange = event => {
    const { place } = this.state;
    place.street = event.target.value;
    this.setState({ place });
  }

  handleCityChange = event => {
    const { place } = this.state;
    place.city = event.target.value;
    this.setState({ place });
  }

  handleStateChange = event => {
    const { place } = this.state;
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
            <Grid item md={4} xs={12}>
              <TextField
                label="Category"
                id="place_category"
                value={place.category}
                margin="normal"
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
                label="Venue (Optional)"
                id="place_name"
                value={place.name}
                onChange={this.handleNameChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="Street (Optional)"
                id="place_street"
                value={place.street}
                onChange={this.handleStreetChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="City (Optional)"
                id="place_city"
                value={place.city}
                onChange={this.handleCityChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="State (Optional)"
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
            color="secondary"
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
