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
            <Mask className="d-flex justify-content-center align-items-center gradient">
              <Container>
                <Carousel
                  activeItem={1}
                  length={4}
                  showControls={false}
                  showIndicators={true}
                  className="z-depth-2">
                <CarouselItem itemId="1">
                <Row className="intro-content">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Welcome to Break-In App </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                <Button outline color="white" onClick={handleSignUp} >Get Started</Button>
                  <Button outline color="white" onClick={handleSignIn} >Have an account? Log in!</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
                </CarouselItem>
                <CarouselItem itemId="2">
              <Row className="intro-content2">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Slide 2! </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                  <Button color="white" onClick={handleSignUp} >Get Started</Button>
                  <Button outline color="white" onClick={handleSignIn} >Have an account? Log in!</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
                </CarouselItem>
                <CarouselItem itemId="3">
              <Row className="intro-content3">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Slide 3! </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                  <Button color="white" onClick={handleSignUp} >Get Started</Button>
                  <Button outline color="white" onClick={handleSignIn} >Have an account? Log in!</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
                </CarouselItem>
                <CarouselItem itemId="4">
              <Row className="intro-content4">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Slide 4! </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                  <Button color="white" onClick={handleSignUp} >Get Started</Button>
                  <Button outline color="white" onClick={handleSignIn} >Have an account? Log in!</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
                </CarouselItem>
                </Carousel>
              </Container>
            </Mask>
          </View>
          </div>
    );
};

export default LandingPage;
