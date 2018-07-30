import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';




export default class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upvotes: 0,

    }
  }

  //INCREASES UPVOTE COUNT BY 1 FOR EVERY BUTTON PRESS
  handleUpvote = (event) => {
    event.preventDefault();
    let { upvotes } = this.state;
    this.props.HandleUpVote(upvotes);
    upvotes += 1
    this.setState({ upvotes });
  }


  render(){
    return(
      <div className="map-popup">
        <p>{this.props.places.name}</p>
        <p>{this.props.places.category}</p>
        <p>{this.props.places.description}</p>

        <p>{this.props.places.street}, {this.props.places.city}, {this.props.places.state}</p>
          <Button
            color="blue"
            id={this.props.Upvote}
            onClick={this.handleUpvote}
          >
            Upvote
          </Button>
      </div>
    )
  }

}
