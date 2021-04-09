import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';
const CalendarStyle = styled.div`
height: 1000px;
width: 100%;
`;

const AddTasks = ({rerenderData }) => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [taskDesignation, setTaskDesignation] = useState([]);
  const [status, setStatus] = useState('Not started');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('Moving');

  //closes the modal
  const handleClose = () => setShow(false);

  //shows the modal
  const handleShow = () => setShow(true);

  //clears the form upon submission of an added task
  const clearForm = () => {
    setTaskDesignation([]);
    setTaskName('');
    setLocation('')
    setStatus('Not started');
    setCompany('');
    setCategory('');
  }

  //submits a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCalendarEvent = {
      summary: taskName,
      location: location,
      description: taskName,
      eventStartTime: startDate,
      eventEndTime: endDate,
      email: userData.email
    };

    const newTask = {
      taskName: taskName,
      location: location,
      startDate: startDate,
      endDate: endDate,
      assignedTo: taskDesignation,
      category: category,
      status: status,
      company: {
        companyName: company,
        url: 'www.google.com'
      },
    }
    
    if (userData.smoves.length === 0) {
      console.log('No current smoves!');
    } else {
      userData.smoves.filter(smove => smove.isCurrentSmove)[0].tasks.push(newTask);
    }

    axios.patch(`/user/${userData.email}`, {data: userData.smoves})
      .then(({ data }) => {
        console.log('new task added: ', data)
        rerenderData(data);
      })
      .then(() => {
        axios.post('/api/newEvent', newCalendarEvent)
          .then(() => {
            console.log('Successully posted a new Event to the Calendar')
          })
          .catch((err) => console.log('error: ', err))
      })
      .then(() => handleClose())
      .then(() => clearForm())
      .catch((err) => console.log('error in patch request to add task: ', err));

  }


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

            <Form onSubmit={handleSubmit}>
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
                <Form.Control required="required" type="text" name={taskDesignation} onChange={({target}) => setTaskDesignation([target.value])} placeholder="Me"/>
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" name={status} onChange={({target}) => setStatus(target.value)}>
                  <option value="Not started">Not started</option>
                  <option value="In progress">In Progress</option>
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
              <Button variant="primary" onClick={handleSubmit}>
                Add
              </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default AddTasks;