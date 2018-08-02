import React from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem} from 'mdbreact';
import { Mask, Row, Col, Button, View, Container} from 'mdbreact';

//DEFINES WHERE GET STARTED LINK TAKES THE USER
const handleSignUp = () => {
  Turbolinks.visit('/users/sign_up');
}

//DEFINES WHERE LOG IN LINK TAKES THE USER
const handleSignIn = () => {
  Turbolinks.visit('/users/sign_in');
}

const LandingPage = (props) => {
    return (
      <div id="landing_page">
          <View>
            
              <Container className="landing-Container">
              
                <Carousel
                  activeItem={1}
                  length={4}
                  showControls={false}
                  showIndicators={true}
                  className="z-depth-2"
                  id="carouselID">
                <Mask className="d-flex justify-content-center align-items-center gradient" id="landingMask"/>
                <CarouselItem itemId="1">
                <Row className="intro-content">
                <Col className="mt-xl-8">
                  <img src="https://i.imgur.com/Ebe9Mvf.png" className="img-fluid" id="introLogo" alt="landingLogo"/>
                </Col>
                </Row>
                </CarouselItem>
                <CarouselItem itemId="2">
              <Row className="intro-content2">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5" id="intro-content-text">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Up to date crime reports!</h1>
                  <hr className="hr-light"/>
                  <Button color="white" onClick={handleSignUp} >Get Started</Button>
                  <Button outline color="white" onClick={handleSignIn} >Have an account? Log in!</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://i.imgur.com/fMBc4SO.png" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
                </CarouselItem>
                <CarouselItem itemId="3">
              <Row className="intro-content3">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5" id="intro-content-text">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Find a safe place to park!</h1>
                  <hr className="hr-light"/>
                  <Button color="white" onClick={handleSignUp} >Get Started</Button>
                  <Button outline color="white" onClick={handleSignIn} >Have an account? Log in!</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://i.imgur.com/C8cNDyo.png" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
                </CarouselItem>
                <CarouselItem itemId="4">
              <Row className="intro-content4">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Help others make safe decisions in your neighborhood!</h1>
                  <hr className="hr-light"/>
                  <Button color="white" onClick={handleSignUp} >Get Started</Button>
                  <Button outline color="white" onClick={handleSignIn} >Have an account? Log in!</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://i.imgur.com/M6vQSiO.png" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
                </CarouselItem>
                </Carousel>
              </Container>
          </View>
          </div>
    );
};

export default LandingPage;
