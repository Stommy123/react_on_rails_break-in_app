import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen';

export default class Flash extends Component {
  state = { open: false, message: '', type: '' }


//PROLLY SHOULDNT USE THIS, BUT DOCUMENTATIONS SAYS SO
  componentWillReceiveProps(props){
    const { open, message, type } = props;
    this.setState({ open, message, type });
  }

//CLOSES FLASH MESSAGE UPON ANY KEY PRESS OR MOUSE CLICK
  handleClose = (event) => {
    this.setState({
      open: false,
      message: '',
      type: ''
    })
  }

  render() {

    //RED FOR ALERT, GREEN FOR NOTICE
    const colors = {alert: red[500], notice: lightGreen[500]};
    const {open, message, type} = this.state;
    return(
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={this.handleClose}
      >
        <SnackbarContent
          message={message}
          style={{backgroundColor: colors[type]}}
        />
      </Snackbar>
    )
  }
}
