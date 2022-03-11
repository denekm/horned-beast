import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handlesClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Image src = {this.props.selectedBeast.image_url}/>
        <Modal.Body>
          {this.props.selectedBeast.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handlesClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast