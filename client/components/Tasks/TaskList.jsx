import React, { useState, useContext, useEffect } from 'react';
import exampleData from '../../test-data.json';
import Tasks from './Tasks.jsx';
import Calendar from './Calendar';
import AddTasks from './AddTasks';
import { UserDataContext } from '../Data.jsx';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';


const TaskList = () => {
  const [sampleData, setSampleData] = useState(exampleData.smoves);
  const { userData, setUserData } = useContext(UserDataContext);
  const [uniqueKey, setUniqueKey] = useState(0);

  //rerenders the data on the task list
  const rerenderData = (data) => {
    setUserData(data);
  }

  //the most amazing rerendering functionality you will ever see in your life EVER
  useEffect(() => {
    setTimeout(() => {
      setUniqueKey(uniqueKey + 1)
    }, 1000)
  }, [userData])

  const currentSmoveFromDb = userData.smoves.filter(smove => smove.isCurrentSmove)[0]
  const tasksFromDb = currentSmoveFromDb.tasks

  //removes a task from the task list
  const deleteTask = (taskName, assignedTo) => {

    for (let i = 0; i < userData.smoves.length; i++) {
      let currentSmove = userData.smoves[i];
      if (currentSmove.isCurrentSmove) {
        currentSmove.tasks = currentSmove.tasks.filter(singleTask => singleTask.taskName !== taskName)
        axios.patch(`/user/${userData.email}`, {data: userData.smoves})
          .then(({ data }) => {
            console.log('Task Deleted: ', data);
            return data;
          })
          .then((data) => rerenderData(data))
          .catch((err) => console.log('Error deleting a task', err));
      }
    }
  }

  const TaskWrapper = styled.div`
    font-size: 25px;
    margin: 25px;
    display: flex; 
    justify-content: center;
    align-content: center;
  `

  const AddTaskWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: left;
    margin-top: 20px;
  `

  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col xs={12} md={8}>
          <TaskWrapper>
            Your Task List Items 
          </TaskWrapper>
            <div>
              <Table bordered hover size="lg">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Users</th>
                    <th>Company</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {tasksFromDb ? tasksFromDb.map((task, idx) => 
                    <Tasks rerenderData={rerenderData} deleteTask={deleteTask} key={idx} task={task} />
                    ) : null}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div style={{ marginTop: '10%' }}>
              <Calendar uniqueKey={uniqueKey}/>
              <AddTaskWrapper>
                <AddTasks rerenderData={rerenderData}/>
              </AddTaskWrapper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TaskList;