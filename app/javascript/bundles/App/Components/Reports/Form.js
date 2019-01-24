import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Form extends Component {

  state = {
            place: {
              name: String(),
              category: this.props.categories.category,
              description: String(),
              street: String(),
              city: String(),
              state: String(),
            }
          }

//CLEARS INPUT VALUES UPON SUBMISSION
  handleSubmit = (event) => {
    event.preventDefault();
    let { place } = this.state;
    this.props.createPlace(place);
    place = {
      name: String(),
      category: String(),
      description: String(),
      street: String(),
      city: String(),
      state: String(),
    }
    this.setState({ place });
  }

  handleChange = field => event => this.setState({ place: { [field]: event.target.value } })


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
                onChange={this.handleChange('description')}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="Venue (Optional)"
                id="place_name"
                value={place.name}
                onChange={this.handleChange('name')}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="Street (Optional)"
                id="place_street"
                value={place.street}
                onChange={this.handleChange('street')}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="City (Optional)"
                id="place_city"
                value={place.city}
                onChange={this.handleChange('city')}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12} >
              <TextField
                label="State (Optional)"
                id="place_state"
                value={place.state}
                onChange={this.handleChange('state')}
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
