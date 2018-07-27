import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'


export default class Popup extends Component {


  render(){
    return(
      <div className="map-popup">
        <p>{this.props.places.name}</p>
        <p>{this.props.places.description}</p>
        <p>{this.props.places.street}, {this.props.places.city}, {this.props.places.state}</p>
          <Button
            color="blue"
            id={this.props.styleName}
            className="startNav"
            onClick={this.props.handleDirectionClick}
          >
            Upvote
          </Button>
          <Button
            color="red"
            id={this.props.styleName}
            className="startNav"
            onClick={this.props.handleDirectionClick}
          >
            Downvote
          </Button>
      </div>
    )
  }

}
