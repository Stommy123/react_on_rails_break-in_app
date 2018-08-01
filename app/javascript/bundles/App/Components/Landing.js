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
    <div className="landingAll">
    
      <div id="landing_page">
          <View className="landingContainer">
            
              <Container >
              
                <Carousel
                  activeItem={1}
                  length={4}
                  showControls={false}
                  showIndicators={true}
                  className="z-depth-2"
                  id="carouselAll">
                <Mask className="d-flex justify-content-center align-items-center gradient">
                <CarouselItem itemId="1">
                <Row className="intro-content">
                <Col className="mt-xl-8">
                  <img src="https://lh3.googleusercontent.com/5IOd71sggX2go2F5hlfqEX-lnJPTt1q-n8aU3QNchd0eA4GcMaJrmoCRzjrBtjWlcIyptf0hOj0hf1CuE9uN=w2412-h1228-rw" className="img-fluid" id="introLogo" alt="landingLogo"/>
                </Col>
                </Row>
                </CarouselItem>
                 </Mask>
                <CarouselItem itemId="2">
              <Row className="intro-content2">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5" id="intro-content-text">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Slide 2! </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                  <Button color="white" onClick={handleSignUp} >Get Started</Button>
                  <Button outline color="white" onClick={handleSignIn} >Have an account? Log in!</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://lh5.googleusercontent.com/sJfmSc3luZLPNWfGaLh5w9QH0GFb2MMx1h6Up0VJ9Uf38ETin7ON44bCidJx5Po38CdJfo_kb7Ab-c23gGSo=w2098-h1228" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
                </CarouselItem>
                <CarouselItem itemId="3">
              <Row className="intro-content3">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5" id="intro-content-text">
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
          </View>
          </div>
          </div>
    );
};

export default LandingPage;
