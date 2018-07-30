import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'




export default class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upvotes: 0,
      downvotes: 0,

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

  //INCREASES DOWNVOTE COUNT BY 1 FOR EVERY BUTTON PRESS
  handleDownvote = (event) => {
    event.preventDefault();
    let { downvotes } = this.state;
    this.props.HandleDownVote(downvotes);
    downvotes += 1
    this.setState({ downvotes });
  }

  render(){
    return(
      <div className="map-popup">
        <p>{this.props.places.name}</p>
        <p>{this.props.places.description}</p>
        <p>{this.props.places.street}, {this.props.places.city}, {this.props.places.state}</p>
        <p>{this.state.upvotes}</p>
        <p>{this.state.downvotes}</p>
          <Button
            color="blue"
            id={this.props.Upvote}
            onClick={this.handleUpvote}
          >
            Upvote
          </Button>
          <Button
            color="red"
            id={this.props.Downvote}
            onClick={this.handleDownvote}
          >
            Downvote
          </Button>
      </div>
    )
  }

}
