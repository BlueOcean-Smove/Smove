
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

const CalendarStyle = styled.div`
  height: 1000px;
  width: 100%;
`;

const AddTasks = () => {
  
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [taskDesignation, setTaskDesignation] = useState([]);
  const [status, setStatus] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = ({target}) => {
    const { value, name } = target;
    console.log(value);
    if (name === 'taskName') {
      setTaskName(value);
    } else if (name === 'location') {
      setLocation(value)
    } else if (name === 'taskDesignation') {
      setTaskDesignation(value)
    } else if (name === 'status') {
      setStatus(value)
    } else if (name === 'company') {
      setCompany(value)
    } else if (name === 'category') {
      setCategory(value)
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a new Task
      </Button>
      
        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
              <Form.Group controlId="formTaskName">
                <Form.Label>Task Name</Form.Label>
                <Form.Control value={taskName} name={taskName} onChange={({target}) => setTaskName(target.value)} type="text" placeholder="Move boxes"/>
              </Form.Group>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" name={location} onChange={({target}) => setLocation(target.value)} placeholder="Location"/>
              </Form.Group>
              
              <p>Start Date/Time</p>
              <DatePicker 
                showTimeSelect
                className="pickDate" 
                selected={startDate} 
                onChange={date => setStartDate(date)} 
              />
              <DatePicker 
                showTimeSelect
                className="pickDate" 
                selected={endDate} 
                onChange={date => setEndDate(date)} 
              />

              <Form.Group controlId="taskDesignation">
                <Form.Label>Who's doing this?</Form.Label>
                <Form.Control type="text" name={taskDesignation} onChange={({target}) => setTaskDesignation(target.value)} placeholder="Me"/>
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" name={status} onChange={({target}) => setStatus(target.value)}>
                  <option value="notStarted">Not started</option>
                  <option value="inProgress">In Progress</option>
                  <option value="Complete">Complete</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="taskCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control as="select" type="text" name={company} onChange={({target}) => setCompany(target.value)}>
                  <option>Company 1</option>
                  <option>Company 2</option>
                  <option>Company 3</option>
                </Form.Control>
              </Form.Group>
               <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" type="text" name={category} onChange={({target}) => setCategory(target.value)}>
                  <option>Moving</option>
                  <option>Storage</option>
                  <option>Cleaning</option>
                  <option>Packing</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default AddTasks;


// import axios from 'axios';
// // import { google } from 'googleapis';

// const Calendar = ({text}) => {
  
//   const [clickText, setClickText] = useState('');
//   const [changeText, setChangeText] = useState('');

//   const makeEvent = () => {
//     axios.post('/api/newEvent')
//   }

//   const handleChange = ({target}) => {
//     const { value } = target;
//     setChangeText(value);
//     // console.log('test fired')
//   }

//   return (
//     <div>
//       <button data-testid="button" onClick={makeEvent}>
//         Make an Event!
//       </button>
//       <input data-testid="input" value={changeText} onChange={handleChange}>
//       </input>
//       <p data-testid="displayText">
//         {changeText}
//         {text}
//       </p>
//     </div>
//   )
// }

// export default Calendar

