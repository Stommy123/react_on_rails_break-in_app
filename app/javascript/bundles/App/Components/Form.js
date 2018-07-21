import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


export default class Form extends Component {
  state = {
    report: {
      description: '',
      category: ''
    }
  }
  componentDidMount() {
    axios.get(`/report/index.json`)
    .then((response) => {
      let reports = response.data;
      this.setState({ reports })
    })
    .catch((error) => { console.log(error) })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { report } = this.state;
    this.props.createReport(report);
    report = { description : '', category: '' }
    this.setState({ report });
  }
  handleDescriptionChange = (event) => {
    let { report } = this.state;
    report.description = event.target.value;
    this.setState({ report });
  }

  handleCategoryChange = (event) => {
    let { report } = this.state;
    report.category = event.target.value;
    this.setState({ report });
  }

  render(){
    const { report } = this.state;
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
                label="Description"
                id="report_description"
                value={report.description}
                onChange={this.handleDescriptionChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                label="Category"
                id="report_category"
                value={report.category}
                onChange={this.handleCategoryChange}
                margin="normal"
                InputLabelProps={{shrink: true}}
                fullWidth
                />
             </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={ this.handleSubmit }
            disabled={ report.description.trim() === '' }
          >
          Create Report
        </Button>
      </form>
    </Paper>
      )
    }
  }
