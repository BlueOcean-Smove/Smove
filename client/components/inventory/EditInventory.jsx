import React, { useState, useContext } from 'react';
import _, { where } from 'underscore';
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

const EditInventory = ({ box, handleClose, show }) => {
    const { userData, setUserData } = useContext(UserDataContext);
    let boxNumber = box.boxNum;
    const [originRoom, setOriginRoom] = useState(box.originRoom);
    const [destinationRoom, setDestinationRoom] = useState(box.destinationRoom);
    const [priorityLevel, setPriorityLevel] = useState(box.boxPriority);
    const [notes, setNotes] = useState(box.notes);

    const handleSubmit = (event) => {
        event.preventDefault();
        const editedBox = {
            boxNum: boxNumber,
            originRoom: originRoom,
            destinationRoom: destinationRoom,
            boxPriority: priorityLevel,
            notes: notes,
          };
        const currentSmoveArr = _.where(userData.smoves, {isCurrentSmove: true});
        const currentInventoryArr = currentSmoveArr[0].inventory;
        for (let i = 0; i < currentInventoryArr.length; i++){
            if (currentInventoryArr[i].boxNum === boxNumber) {
                currentInventoryArr[i] = editedBox;
            }
        }
        axios.patch(`/user/${userData.email}`, {data: userData.smoves})
        .then(({ data }) => {
            setUserData(data);
        })
        .then(() => handleClose())
        .catch((err) => console.log('error in patch request to add inventory arr: ', err));
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Make Edits Box Number {box.boxNum}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div>Box Number: {box.boxNum}</div>
                        <br></br>
                        <Form.Group controlId="formEditOriginRoom">
                            <Form.Label>Edit Origin Room Name</Form.Label>
                            <Form.Control type="text" placeholder={box.originRoom} onChange={(event) => setOriginRoom(event.target.value)} />
                            <Form.Text className="text-muted">Examples: Kitchen, Office, Living Room, etc.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formEditDestinationRoom">
                            <Form.Label>Edit Destination Room Name</Form.Label>
                            <Form.Control type="text" placeholder={box.destinationRoom} onChange={(event) => setDestinationRoom(event.target.value)}/>
                            <Form.Text className="text-muted">Examples: Kitchen, Office, Living Room, etc.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formEditPrioritySelect">
                            <Form.Label>Edit Box Priority Level</Form.Label>
                            <Form.Control as="select" onChange={(event) => setPriorityLevel(event.target.value)}>
                                <option>Normal</option>
                                <option>Urgent</option>
                                <option>Low</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formEditNotes">
                            <Form.Label>Edit Additional Notes - optional</Form.Label>
                            <Form.Control type="text" placeholder={box.notes} onChange={(event) => setNotes(event.target.value)} />
                            <Form.Text className="text-muted">Examples: Fragile, Contains Silverware, etc.</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleSubmit}>Save Edits to Box {box.boxNum}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default EditInventory;