import React, { useState, useContext } from 'react';
import axios from 'axios';
import _, { where } from 'underscore';
import { UserDataContext } from '../Data.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const CreateInventory = () => {
    //userData import
    const { userData, setUserData } = useContext(UserDataContext);

    //Modal info state
    let boxNumber = null;
    const [originRoom, setOriginRoom] = useState('');
    const [destinationRoom, setDestinationRoom] = useState('');
    const [priorityLevel, setPriorityLevel] = useState('Normal');
    const [notes, setNotes] = useState('');
    //Display modal state
    const [show, setShow] = useState(false);

    //Can submit Inventory Object status
    const [isComplete, setIsComplete] = useState(true);

    //Display modal status
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Calculate the largest box number to display in modal/assign to new inventory item
    const largestBoxNum = () => {
        const currentSmoveArr = _.where(userData.smoves, {isCurrentSmove: true});
        const currentInventoryArr = currentSmoveArr[0];
        if (currentInventoryArr.length === 0) {
            return 1;
        } else {
            let largestNum = 0;
            for (var i = 0; i < currentInventoryArr.length; i++) {
                if (currentInventoryArr[i].boxNum > largestNum) {
                    largestNum = currentInventoryArr[i].boxNum;
                }
            }
            largestNum = (largestNum + 1);
            boxNumber = largestNum;
            return largestNum;
        }    
    }

    //On submit, validates data. If data is validated for originRoom, destinationRoom, and priorityLevel, will make a patch request to changed inventory array in the database 
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!originRoom || !destinationRoom || !priorityLevel) {
            setIsComplete(false);
        } else {
            const currentSmoveArr = _.where(userData.smoves, {isCurrentSmove: true});
            const currentInventoryArr = currentSmoveArr[0].inventory;
            currentInventoryArr.push({
                boxNum: boxNumber,
                originRoom: originRoom,
                destinationRoom: destinationRoom,
                boxPriority: priorityLevel,
                notes: notes,
              });
            axios.patch(`/user/${userData.email}`, {data: userData.smoves})
            .then(() => {
                handleClose();
                setOriginRoom('');
                setDestinationRoom('');
                setPriorityLevel('Normal');
                setNotes('');
            })
            .catch((err) => console.log('error in patch request to add inventory arr: ', err))
        }
    }

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow}>Add Box to Inventory</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Box to Inventory List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div>Box Number: {largestBoxNum()}</div>
                        <br></br>
                        <Form.Group controlId="formOriginRoom">
                            <Form.Label>Origin Room</Form.Label>
                            <Form.Control type="text" placeholder="Enter Origin Room Name" onChange={(event) => setOriginRoom(event.target.value)}/>
                            <Form.Text className="text-muted">Examples: Kitchen, Office, Living Room, etc.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formDestinationRoom">
                            <Form.Label>Destination Room</Form.Label>
                            <Form.Control type="text" placeholder="Enter Destination Room Name" onChange={(event) => setDestinationRoom(event.target.value)}/>
                            <Form.Text className="text-muted">Examples: Kitchen, Office, Living Room, etc.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formPrioritySelect">
                            <Form.Label>Box Priority Level</Form.Label>
                            <Form.Control as="select" onChange={(event) => setPriorityLevel(event.target.value)}>
                                <option>Normal</option>
                                <option>Urgent</option>
                                <option>Low</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formNotes">
                            <Form.Label>Additional Notes - optional</Form.Label>
                            <Form.Control type="text" placeholder="Enter Notes" onChange={(event) => setNotes(event.target.value)}/>
                            <Form.Text className="text-muted">Examples: Fragile, Contains Silverware, etc.</Form.Text>
                        </Form.Group>
                    </Form>
                    {!isComplete && <span id="warning">Please complete all the fields before submit</span>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleSubmit}>Save New Inventory Box</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default CreateInventory;