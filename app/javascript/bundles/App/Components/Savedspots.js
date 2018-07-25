import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Navbar, NavbarBrand, Fa, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container, FormInline } from 'mdbreact';


export default class Savedspots extends Component {

  handleClick = () => {
  console.log('Hello World');

}


    render() {
      return (

      <ul>
        <li>Home</li>
        <li>Work</li>
        <li>Favorite Spots</li>
        <li>Connect with other users</li>
        <li>REPORT!</li>
      </ul>
    )
  }
}
