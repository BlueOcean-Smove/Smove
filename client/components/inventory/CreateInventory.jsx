import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

const CreateInventory = () => {
    //Saving state for POST obj
    const [boxNumber, setBoxNumber] = useState(null);
    const [originRoom, setOriginRoom] = useState('');
    const [destinationRoom, setDestinationRoom] = useState('');
    const [priorityLevel, setPriorityLevel] = useState('');
    const [notes, setNotes] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow}>Add to Inventory</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Inventory Box  to List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* MISSING BOX NUMBER */}
                        <Form.Group controlId="formOriginRoom">
                            <Form.Label>Origin Room</Form.Label>
                            <Form.Control type="text" placeholder="Enter Origin Room Name" />
                            <Form.Text className="text-muted">Examples: Kitchen, Office, Living Room, etc.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formDestinationRoom">
                            <Form.Label>Destination Room</Form.Label>
                            <Form.Control type="text" placeholder="Enter Destination Room Name" />
                            <Form.Text className="text-muted">Examples: Kitchen, Office, Living Room, etc.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formPrioritySelect">
                            <Form.Label>Box Priority Level</Form.Label>
                            <Form.Control as="select">
                                <option>Normal</option>
                                <option>Urgent</option>
                                <option>Low</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formNotes">
                            <Form.Label>Additional Notes</Form.Label>
                            <Form.Control type="text" placeholder="Enter Notes" />
                            <Form.Text className="text-muted">Examples: Fragile, Contains Silverware, etc.</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleClose}>Save New Inventory Box</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default CreateInventory;