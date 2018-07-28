import React from 'react';
import { Container, Button, fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container className="modalContainer">
      
      <div class="modal fade right" id="modalSocial" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-full-height modal-right" role="document">
        <div class="modal-content">
            <div class="modal-header light-blue darken-3 white-text">
                <h4 class="title"> Report a Crime!</h4>
                <Button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
            </div>
            <div class="modal-body mb-0 text-center" id="modalBody">
              
                <a className="aTag"><img className="reportButton1" src="/assets/burglar-1.png"/></a>
                
                <a className="aTag"><img className="reportButton2" src="/assets/burning-car.png"/></a>

                <a className="aTag"><img className="reportButton3" src="/assets/car.png"/></a>

                <a className="aTag"><img className="reportButton4" src="/assets/brass-knuckles.png"/></a>

                <a className="aTag"><img className="reportButton5" src="/assets/burning-car.png"/></a>

                <a className="aTag"><img className="reportButton6" src="/assets/injection.png"/></a>

                <a className="aTag"><img className="reportButton7" src="/assets/crime.png"/></a>

                <a className="aTag"><img className="reportButton8" src="/assets/camera"/></a>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>

    </div>
</div>
</Container>
    );
  }
}

export default ModalPage;
