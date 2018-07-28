import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import Flash from './Flash.js'



//INCREASES UPVOTE COUNT BY 1 FOR EVERY BUTTON PRESS
const handleUpVote = () => {
    alert("ahoy/1!");
  upvotes = upvotes + 1
   const flash = {
     open: true,
     message: 'Upvoted!',
     type: 'notice'
   };
   this.setState({
     upvotes: this.state.upvotes + 1,
      flash });
 }

//INCREASES DOWNVOTE COUNT BY 1 FOR EVERY BUTTON PRESS
 const handleDownVote = () => {
   downvotes = downvotes + 1
   const flash = {
     open: true,
     message: 'Downvoted!',
     type: 'alert'
   };
   this.setState({
     downvotes: this.states.downvotes + 1,
      flash });
 }
export default class Popup extends Component {
  state = {
            upvotes: 0,
            downvotes: 0,
            flash: {
              message: '',
              open: false,
              type: ''
            }
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
            id={this.props.styleName}
            className="startNav"
            onClick={this.handleUpVote}
          >
            Upvote
          </Button>
          <Button
            color="red"
            id={this.props.styleName}
            className="startNav"
            onClick={this.handleDownVote}
          >
            Downvote
          </Button>
          <Flash
            message={ this.state.flash.message }
            open={ this.state.flash.open}
            type={ this.state.flash.type }
            />
      </div>
    )
  }

}
