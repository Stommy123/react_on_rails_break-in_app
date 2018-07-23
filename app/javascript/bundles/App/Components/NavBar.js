import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Navbar, NavbarBrand, Fa, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container, FormInline } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Button from '@material-ui/core/Button';


const handleLiveMap = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/map/mapbox');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}
const handleContact = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/contact/index');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}
const handleSupport = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/support/index');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}


const handleDemo = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/demo');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}


class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }

  render(){
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
      <div id="Nav">
       <Router>
          <div>
            <Navbar dark expand="md" fixed="top" scrolling>
              <Container>
                <NavbarBrand>
                  <span className="white-text">Break-In App</span>
                </NavbarBrand>
                <NavbarToggler onClick = { this.onClick } />
                <Collapse isOpen = {this.state.collapse} navbar>
                  <NavbarNav left>
                    <NavItem>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <Button
                        color="inherit"
                        onClick={ handleLiveMap }
                        >
                        Live Map
                      </Button>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Account</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Scoreboard</NavLink>
                    </NavItem>
                    <NavItem>
                      <Button
                        color="inherit"
                        onClick={ handleSupport }
                        >
                        Support
                      </Button>
                    </NavItem>
                    <NavItem>
                      <Button 
                      color="inherit"
                      onClick={ handleContact }
                      >Contact
                      </Button>
                    </NavItem>
                  </NavbarNav>
                  <NavbarNav right >
                    <NavItem>
                      <NavLink to="!#">
                        <Fa icon="facebook"></Fa>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="!#">
                        <Fa icon="twitter"></Fa>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="!#">
                        <Fa icon="instagram"></Fa>
                      </NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
          { this.state.collapse && overlay}
          </div>
        </Router>
          </div>
    );
  }
};

export default Nav;
