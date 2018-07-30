import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';




export default class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upvotes: 0,
      count: 0,

    }
    this.incrementCounter = this.updateCounter.bind(this, 1);
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
        <p>{this.props.places.description}</p>
          <div>{this.state.count}</div>
          <input type='button' value='+' onClick={this.incrementCounter} />

        <p>{this.props.places.street}, {this.props.places.city}, {this.props.places.state}</p>
        <p>Upvotes:{this.state.upvotes}</p>
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
    updateCounter(count) {
        this.setState({count: this.state.count + count});
      }

}
