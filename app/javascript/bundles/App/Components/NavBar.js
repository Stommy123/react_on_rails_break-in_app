import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink } from 'mdbreact';
import { Container } from '../../../../../node_modules/semantic-ui-react';


//DEFINES WHERE Home LINK TAKES THE USER
const handleHome = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}

//DEFINES WHERE LiveMap LINK TAKES THE USER
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

//STYLING FOR EACH POP UP DRAWER
const styles = {
  list: {
    width: 275,
  },

};

class Nav extends Component {
	state = {
	 left: false,
	 bottom: false
 };

 //METHOD TO OPEN AND CLOSE DRAWER -- NOT ALWAYS WORKING
 toggleDrawer = (side, open) => () => {
	this.setState({
		[side]: open,
	});
};


	render() {

		const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>handleHomehandleHome
				<Button className="SideNavHeader" fullWidth= {true} onClick={handleHome}></Button>
        <Divider />
				<List></List>
				<Button className="SideNavOptions" fullWidth={true} onClick={handleLiveMap}>Live Map</Button>
        <Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={handleScoreBoard}>ScoreBoard</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={handleAbout}>About</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={handleContact}>Contact</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={this.toggleDrawer('left', true)}>Connect Calender</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={this.toggleDrawer('left', true)}>Connect Facebook Events</Button>
        <List></List>
				<Divider />
      </div>
    );


    return (
      <div>
    		<Button onClick={this.toggleDrawer('left', true)}><Fa icon="bars" size="2x"></Fa></Button>
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
      </div>
    );
	}
}

// //DEFINE PROP TYPES FOR MATERIAL UI COMPONENTS
// Nav.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

//EXPORTS THIS COMPONENT WITH STYLES INTACT
export default withStyles(styles)(Nav);
