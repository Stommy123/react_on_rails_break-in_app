import React from 'react';
import { Mask, Row, Col, Button, View, Container} from 'mdbreact';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem} from 'mdbreact';


//DEFINES WHAT HAPPEN WHEN USER CLICKS LOG IN
const handleLogIn = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/users/sign_in');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}

//DEFINES WHAT HAPPENS WHEN USER CLICKS SIGN UP
const handleCreateAccount = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/users/sign_up');
  link.setAttribute('rel', 'nofollow');
  document.body.appendChild(link);
  link.click();
}

class LandingPage extends React.Component {

  render(){

    return (
      <div id="landing_page">
          <View>
            <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
            <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-2">
            <CarouselItem itemId="1">
              <Row className="intro-content">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Welcome to Break-In App </h1>
                  <hr className="hr-light"/>
                  <h6 className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                <Button onClick={ handleCreateAccount } color="white">Get Started</Button>
                <Button onClick={ handleLogIn } outline color="white">Have an account? Log in</Button>
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
                  <Button onClick={ handleCreateAccount } color="white">Get Started</Button>
                  <Button onClick={ handleLogIn } outline color="white">Have an account? Log in</Button>
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
                  <Button onClick={ handleCreateAccount } color="white">Get Started</Button>
                  <Button onClick={ handleLogIn } outline color="white">Have an account? Log in</Button>
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
                  <Button onClick={ handleCreateAccount } color="white">Get Started</Button>
                  <Button onClick={ handleLogIn } outline color="white">Have an account? Log in</Button>
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
  }
};

export default LandingPage;
