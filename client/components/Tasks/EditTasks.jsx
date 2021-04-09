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

const EditTasks = ({
  rerenderData,
  show,
  handleClose,
  taskNameEdit,
  locationEdit,
  startDateEdit,
  endDateEdit,
  assignedToEdit,
  statusEdit,
  companyEdit,
  categoryEdit
}) => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [taskName, setTaskName] = useState(taskNameEdit);
  const [oldName, setOldName] = useState(taskNameEdit);
  const [location, setLocation] = useState(locationEdit);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [taskDesignation, setTaskDesignation] = useState(assignedToEdit);
  const [status, setStatus] = useState(statusEdit);
  const [category, setCategory] = useState(categoryEdit);
  const favCompany = userData.smoves.filter(smove => smove.isCurrentSmove)[0].favCompanies;
  const [company, setCompany] = useState({
    companyName: 'No Company',
    url: undefined, 
  });
  
  //gets the url for the company to be sent to db
  const getUrlForCompany= (name) => {
    for (let i = 0; i < favCompany.length; i++) {
      if (favCompany[i].companyName === name) {
        return favCompany[i].url;
      }
    }
  }

  //Edit Task in the task list
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCalendarEvent = {
      summary: taskName,
      location: location,
      description: taskName,
      eventStartTime: startDate,
      eventEndTime: endDate,
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
        companyName: company.companyName,
        url: company.url || undefined
      },
    }

    //needed to display newTask 
    console.log(newTask);

    const currentSmove = userData.smoves.filter(smove => smove.isCurrentSmove)[0];
    for (let i = 0; i < currentSmove.tasks.length; i++) {
      if (currentSmove.tasks[i].taskName === oldName) {
        currentSmove.tasks[i] = newTask;
      }
    }

    axios.patch(`/user/${userData.email}`, {data: userData.smoves})
      .then(({ data }) => {
        console.log('new task added: ', data)
        rerenderData(data);
      })
      .then(() => handleClose())
      .catch((err) => console.log('error in patch request to add task: ', err));
  }

  return (
    <>
        <Modal data-testid="editTaskModal" size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTaskName">
                <Form.Label>Task Name</Form.Label>
                <Form.Control value={taskName} name={taskName} onChange={({target}) => setTaskName(target.value)} type="text" placeholder="Move boxes"/>
              </Form.Group>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control value={location} type="text" name={location} onChange={({target}) => setLocation(target.value)} placeholder="Location"/>
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
                <Form.Control value={taskDesignation} required="required" type="text" name={taskDesignation} onChange={({target}) => setTaskDesignation([target.value])} placeholder="Me"/>
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control value={status} as="select" name={status} onChange={({target}) => setStatus(target.value)}>
                  <option value="Not started">Not started</option>
                  <option value="In progress">In Progress</option>
                  <option value="Complete">Complete</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="taskCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control as="select" type="text" name={company} onChange={({target}) => setCompany({companyName: target.value, url: getUrlForCompany(target.value)})}>
                  <option value={'No Company'}>No Company</option>
                  {favCompany.map((company, idx) => 
                    <option key={idx} value={company.companyName}>{company.companyName}</option>
                  )}
                </Form.Control>
              </Form.Group>
               <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control value={category} as="select" type="text" name={category} onChange={({target}) => setCategory(target.value)}>
                  <option value="Moving">Moving</option>
                  <option value="Storage">Storage</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Packing">Packing</option>
                  <option value="Other">Other</option>
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

export default EditTasks;