import React, { Component } from 'react'
import axios from 'axios';
import Map from './Map';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink } from 'mdbreact';
import { Container } from '../../../../../../node_modules/semantic-ui-react';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';
import Nav from '../NavBar.js'

const styles = {
  list: {
    width: 275,
  },
	// bottomList: {
	// 	height: 200,
	// 	width: 350,
	// }
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
				<Button className="SideNavHeader" fullWidth='true' onClick={this.toggleDrawer('left', true)}></Button>
        <Divider />
				<List></List>
				<Button className="SideNavOptions" color='primary' fullWidth='true' onClick={this.toggleDrawer('left', true)}>Home</Button>
        <Divider />
				<Button className="SideNavOptions" fullWidth='true' onClick={this.toggleDrawer('left', true)}>Work</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth='true' onClick={this.toggleDrawer('left', true)}>Favorites</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth='true' onClick={this.toggleDrawer('left', true)}>Connect Calender</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth='true' onClick={this.toggleDrawer('left', true)}>Connect Facebook Events</Button>
        <List></List>
				<Divider />
      </div>
    );

		const bottomList = (
		<div className="bottomList">
		<div className={classes.bottomList}>
		<div className="reportHeader">
			<div className="reportHeaderText">Send a report</div>
		</div>
			<div className="row">
				
    <div className="col">
		<Button className="reportButton1" fullWidth='true' onClick={this.toggleDrawer('bottom', true)}>Theft</Button>
    </div>
    <div className="col">
		<Button className="reportButton2" fullWidth='true' onClick={this.toggleDrawer('bottom', true)}>Arson</Button>
    </div>
		<div className="col">
		<Button className="reportButton3" fullWidth='true' onClick={this.toggleDrawer('bottom', true)}>Hit & Run</Button>
    </div>
		<div className="col">
		<Button className="reportButton4" fullWidth='true' onClick={this.toggleDrawer('bottom', true)}>Assault</Button>
    </div>
		<div className="w-100"></div>
		<div className="col">
		<Button className="reportButton5" fullWidth='true' onClick={this.toggleDrawer('bottom', true)}>Robbery</Button>
    </div>
		<div className="col">
		<Button className="reportButton6" fullWidth='true' onClick={this.toggleDrawer('bottom', true)}>Drug Deal</Button>
    </div>
    <div className="col">
		<Button className="reportButton7" fullWidth='false' onClick={this.toggleDrawer('bottom', true)}>Murder</Button>
    </div>
    <div className="col">
		<Button className="reportButton8" fullWidth='false' onClick={this.toggleDrawer('bottom', true)}>Camera</Button>
    </div>
		</div>
		</div>
		</div>
		);

		



    return (
      <div>
    		<Button onClick={this.toggleDrawer('left', true)}><Fa icon="bars" size="2x"></Fa></Button>
        <Nav />
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
				<div className="bottomModule">
				<Drawer anchor='right' open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {bottomList}
          </div>
        </Drawer>
				</div>
				<Map />
			 	<Button color='primary' id='addReport' variant="fab"  aria-label="Add" onClick={this.toggleDrawer('bottom', true)}><UpIcon /></Button>
      </div>
    );
	}
}

Locations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Locations);
