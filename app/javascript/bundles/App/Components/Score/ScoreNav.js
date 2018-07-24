import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class ScoreNav extends Component {
  render() {
    return (
      <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-dark p-4">
                  <h4 class="text-white">Menu</h4>
              </div>
              <div class="bg-dark p-4">
                  <span class="text-muted">Live Map</span>
              </div>
              <div class="bg-dark p-4">
                  <span class="text-muted">Settings</span>
              </div>
              <div class="bg-dark p-4">
                  <span class="text-muted">About</span>
              </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
          <div id='FlexNav'>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  <span id='NavTitle'>Scoreboard</span>
              </button>
          </div>
          </nav>
      </div>

    )
  }
}
