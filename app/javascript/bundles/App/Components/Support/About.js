import React from 'react';
import { Container, Fa, Row, Col, ListGroup, ListGroupItem } from 'mdbreact';
import Nav from '../NavBar.js';

const About = (props) => {
    return(
      <div className="aboutContainer">
        <Nav />
        <Container className="aboutContent">
        <div>
        <section className="text-center my-5" id="aboutContent">
          <h2 className="h1-responsive font-weight-bold my-5">So why is Break-In so great?</h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Row>
            <Col md="4">
              <i className="fas fa-map-marked-alt"size="3x" className="red-text"/>
              <Fa icon="users" size="3x" className="red-text"/>
              <h5 className="h1-responsive font-weight-bold my-4">Peer Statistics</h5>
              <p className="lead grey-text h-responsive mb-md-0 mb-5">Real time user inputs ensures you are alwasy given the latest safety statistics, peer reviewed for accuracy.</p>
            </Col>
            <Col md="4">
              <Fa icon="tablet" size="3x" className="cyan-text"/>
              <h5 className="h1-responsive font-weight-bold my-4">Mobile</h5>
              <p className="lead grey-text h-responsive grey-text mb-md-0 mb-5">Our mobile first design ensures you can take our site anywhere you go.</p>
            </Col>
            <Col md="4">
              <Fa icon="trophy" size="3x" className="orange-text"/>
              <h5 className="h1-responsive font-weight-bold my-4">Engagement</h5>
              <p className="lead grey-text h-responsive grey-text mb-md-0 mb-5">With our trophy system and anonymous submission process, we ensure our users are engaged and reporting information accurately.</p>
            </Col>
            <br/>>
            <Col className="FAQlist">
            <h2 className="h1-responsive font-weight-bold my-5">FAQ</h2>
          <ListGroup>
                <ListGroupItem href="#" active>Place Holder for FAQ Item 1</ListGroupItem>
                <ListGroupItem href="#">Place Holder for FAQ Item 2</ListGroupItem>
                <ListGroupItem href="#">Place Holder for FAQ Item 3</ListGroupItem>
                <ListGroupItem href="#">Place Holder for FAQ Item 4</ListGroupItem>
                <ListGroupItem href="#">Place Holder for FAQ Item 5</ListGroupItem>
                <ListGroupItem href="#">Place Holder for FAQ Item 6</ListGroupItem>
                <ListGroupItem href="#">Place Holder for FAQ Item 7</ListGroupItem>
            </ListGroup>
            </Col>
          </Row>


        </section>
        </div>
      </Container>
    </div>
    );
};

export default About;
