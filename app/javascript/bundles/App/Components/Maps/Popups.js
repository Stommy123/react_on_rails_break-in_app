import React, { Component } from 'react';

export default class Popup extends Component {

  render(){
    return(
      <div className="map-popup">
        <p>{this.props.places.name}, {this.props.places.category}</p><br/>
        <p>{this.props.places.description}</p><br/>
        <p>{this.props.places.street}, {this.props.places.city}, {this.props.places.state}</p>
      </div>
    )
  }

}
