import React, { Component } from 'react'
import axios from 'axios';
import MapBox from './MapBox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';

const styles = {
  list: {
    width: 750,
  },
	bottomList: {
		height: 500,
		width: 500
	}
};

class Locations extends Component {
	state = {
	 left: false,
	 bottom: false
 };

 toggleDrawer = (side, open) => () => {
	this.setState({
		[side]: open,
	});
};


	render() {

		const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
				<Button fullWidth='true' onClick={this.toggleDrawer('left', true)}>Navigation</Button>
        <List></List>
				<Button color='primary' fullWidth='true' onClick={this.toggleDrawer('left', true)}>Home</Button>
        <Divider />
				<Button fullWidth='true' onClick={this.toggleDrawer('left', true)}>Work</Button>
        <List></List>
				<Divider />
				<Button fullWidth='true' onClick={this.toggleDrawer('left', true)}>Favorites</Button>
        <List></List>
				<Divider />
				<Button fullWidth='true' onClick={this.toggleDrawer('left', true)}>Connect Calender</Button>
        <List></List>
				<Divider />
				<Button fullWidth='true' onClick={this.toggleDrawer('left', true)}>Connect Facebook Events</Button>
        <List></List>
				<Divider />
      </div>
    );

		const bottomList = (
			<div className={classes.bottomList}>
				<List></List>
					<Button id='drawer' variant="fab" color="secondary" aria-label="Add" onClick={this.toggleDrawer('bottom', true)}></Button>
			</div>
		);


    return (
      <div>
				<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
				<Drawer anchor='bottom' open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {bottomList}
          </div>
        </Drawer>
				<MapBox />
				<Button id='drawer' variant="fab" color="secondary" aria-label="Add" onClick={this.toggleDrawer('left', true)}><AddIcon /></Button>
			 	<Button color='primary' id='addReport' variant="fab"  aria-label="Add" onClick={this.toggleDrawer('bottom', true)}><UpIcon /></Button>
      </div>
    );
	}
}

Locations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Locations);
