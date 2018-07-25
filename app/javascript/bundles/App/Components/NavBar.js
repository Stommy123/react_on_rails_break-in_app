import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


//DEFINES WHERE LIVE MAP LINK TAKES THE USER
const handleLiveMap = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/places');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}

//DEFINES WHERE CONTACT LINK TAKES THE USER
const handleContact = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/contact');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}

//DEFINES WHERE ABOUT LINK TAKES THE USER
const handleAbout = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/about');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}
const handleScoreBoard = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/scoreboard');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}



export default class Nav extends Component {
  render() {
    return (
      <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-dark p-4">
                  <h4 class="text-white">Menu</h4>
              </div>
              <div class="bg-dark p-4">
                <Button onClick={ handleLiveMap }><span class="text-muted">Live Map</span></Button>
              </div>
              <div class="bg-dark p-4">
                <Button onClick={ handleScoreBoard }><span class="text-muted">Scoreboard</span></Button>
              </div>
              <div class="bg-dark p-4">
                <Button onClick={ handleAbout }><span class="text-muted">About</span></Button>
              </div>
              <div class="bg-dark p-4">
              <Button onClick={ handleContact }><span class="text-muted">Contact</span></Button>
              </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
          <div id='FlexNav'>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
          </nav>
      </div>

    )
  }
}
