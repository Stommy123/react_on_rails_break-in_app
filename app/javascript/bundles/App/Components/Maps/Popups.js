import React, { Component } from 'react';

export default class Popup extends Component {

  render(){
    return(
      <div className="map-popup">
        <p>{this.props.places.name}</p>
      </div>
    )
  }
}
