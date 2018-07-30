import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';
import { Container, Fa, Row, Col, ListGroup, ListGroupItem } from 'mdbreact';



export default class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upvotes: 17,

    }
  }

  //INCREASES UPVOTE COUNT BY 1 FOR EVERY BUTTON PRESS
  handleUpvote = (event) => {
    event.preventDefault();
    let { upvotes } = this.state;
    upvotes += 1;
    console.log("HELLO!");
    this.setState({ upvotes });
  }


  render(){
    return(
      <div className="map-popup">
        <p>{this.props.place.name}</p>
        <p>{this.props.place.category}</p>
        <p>{this.props.place.description}</p>
        <p id='demo'>{this.state.upvotes}</p>
        <p>{this.props.place.street}, {this.props.place.city}, {this.props.place.state}</p>
          <Button
            id={`place_${this.props.place.id}`}
            color="green"
          ><Fa icon="thumbs-up" />
          </Button>
      </div>
    )
  }

}
