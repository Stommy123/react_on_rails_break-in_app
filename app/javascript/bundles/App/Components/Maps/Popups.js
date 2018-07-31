import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';
import { Container, Fa, Row, Col, ListGroup, ListGroupItem } from 'mdbreact';
import Divider from '@material-ui/core/Divider';



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
        <p><strong>{this.props.place.name}</strong></p>
        <p><strong>Category: </strong>{this.props.place.category}</p>
        <Divider />
        <p><strong>Description: </strong>{this.props.place.description}</p>
        <Divider />
        <p><strong>Address: </strong>{this.props.place.street}, {this.props.place.city}, {this.props.place.state}</p>
        <Divider/>
        <p id='demo'><strong>Validations: </strong>{this.state.upvotes}</p>
          <Button
            id={`place_${this.props.place.id}`}
            color="green"
          ><Fa icon="thumbs-up" />
          </Button>
      </div>
    )
  }

}
