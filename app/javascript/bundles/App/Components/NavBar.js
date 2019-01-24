import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Fa } from 'mdbreact';


const handleLink = link => _ => Turobilinks.visit(link)
const handleLogout = () => {
  const link = document.createElement('a');
  link.setAttribute('href', '/users/sign_out');
  link.setAttribute('rel', 'nofollow');
  link.setAttribute('data-method', 'delete');
  document.body.appendChild(link);
  link.click();
}
const styles = { list: { width: 275 } }
class Nav extends Component {
  state = { left: false, bottom: false }
  
  toggleDrawer = (side, open) => () => this.setState({ [side]: open })  //METHOD TO OPEN AND CLOSE DRAWER -- NOT ALWAYS WORKING

	render() {
		const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
				<Button className="SideNavHeader" fullWidth= {true} onClick={handleLink('/')}>Home</Button>
        <Divider />
				<List />
				<Button className="SideNavOptions" fullWidth={true} onClick={handleLink('/places')}>Live Map</Button>
        <Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={handleLink('/scoreboard')}>ScoreBoard</Button>
        <List />
				<Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={handleLink('/about')}>About</Button>
        <List/>
				<Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={handleLink('/contact')}>Contact</Button>
        <List />
				<Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={this.toggleDrawer('left', true)}>Connect Calender</Button>
        <List />
				<Divider />
				<Button className="SideNavOptions" fullWidth= {true} onClick={this.toggleDrawer('left', true)}>Connect Facebook Events</Button>
        <List />
				<Divider />
        <Button className="SideNavOptions" fullWidth= {true} onClick={handleLink('/users/edit')}>My Account</Button>
        <List />
				<Divider />
        <List />
        <Button className="SideNavOptions" fullWidth= {true} onClick={handleLogout}>Log Out</Button>
        <Divider />
      </div>
    )
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

export default withStyles(styles)(Nav);
