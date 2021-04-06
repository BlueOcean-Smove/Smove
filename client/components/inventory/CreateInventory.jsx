import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

const CreateInventory = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <React.Fragment>
        <Button variant="primary" onClick={handleShow}>Add to Inventory</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Inventory Item to List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>Display Box Number Here</div>
              <form>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" value="John"></input>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" value="Doe"></input>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
}

export default CreateInventory;