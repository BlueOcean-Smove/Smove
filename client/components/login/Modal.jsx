import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { UserDataContext } from './Data.jsx';
import axios from 'axios';

const InfoModal = ({ showModal, setShowModal }) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [date, setDate] = useState('');
  const { userData, setUserData } = useContext(UserDataContext);
  const [isComplete, setIsComplete] = useState(true);

  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    if (event.target.name === 'current') {
      setCurrentAddress(event.target.value);
    } else if (event.target.name === 'new') {
      setNewAddress(event.target.value);
    } else if (event.target.name === 'date') {
      setDate(event.target.value)
    }
  }

  const handleClose = (event) => {
    setShowModal(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(false);

    if (!currentAddress || !newAddress || !date) {
      setIsComplete(false);
    } else {
      let newSmovesArray = userData.smoves;
      newSmovesArray.push({
        oldAddress: currentAddress,
        newAddress: newAddress,
        smoveDate: date,
        isCurrentSmove: true
      })
      axios.patch(`/user/${userData.email}`, {data: newSmovesArray})
        .then(({ data }) => console.log('new smove added: ', data))
        .catch((err) => console.log('error in patch request to create new smove: ', err))
    }
  }
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your New Smove!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add some details about your upcoming Smove
          <form>
            <label>
              Current Address:
              <input type="text" name="current" onChange={handleChange}/>
            </label>
            <label>
              New Address:
              <input type="text" name="new" onChange={handleChange}/>
            </label>
            <label>
              Move Date:
              <input type="date" name="date" onChange={handleChange}/>
            </label>
          </form>
          {!isComplete && <span id="warning">Please complete all the fields before submit</span>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoModal;