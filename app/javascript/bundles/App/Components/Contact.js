import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';
import Nav from './NavBar.js'

class Contact extends Component {
  render() {
    return(
      <div className="TotalPage">
      <Nav />
      <Container className="ContactPage w-responsive text-center mx-auto p-3">
        <section className="align-self-center" id="contactSection">
          <h2 className="h1-responsive font-weight-bold text-center">Contact us</h2>
          <p className="text-center w-responsive mx-auto pb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
       
            <Col lg="12">
              <div id="map-container" className="rounded z-depth-1-half map-container" style={{height: '400px'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" width="100%" height="100%" frameBorder="0" style={{border:0}}></iframe>
              </div>
              <br/>
              <Row className="text-center">
                <Col xs="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="map-marker"/>
                  </Button>
                  <p>Miami, FL</p>
                  <p className="mb-md-0">United States</p>
                </Col>
                <Col xs="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="phone"/>
                  </Button>
                  <p>+ 01 234 567 89</p>
                  <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </Col>
                <Col xs="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="envelope"/>
                  </Button>
                  <p className="mb-md-0">info@breakinapp.com</p>
                </Col>
              </Row>
            </Col>
   
        </section>
      </Container>
    </div>
    );
  };
}

export default Contact;
