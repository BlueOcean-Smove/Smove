import React, { useState, useContext, useEffect } from 'react';
import exampleData from '../../test-data.json';
import Tasks from './Tasks.jsx';
import Calendar from './Calendar';
import AddTasks from './AddTasks';
import { UserDataContext } from '../Data.jsx';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const TaskList = () => {
  const [sampleData, setSampleData] = useState(exampleData.smoves);
  const { userData, setUserData } = useContext(UserDataContext);
  

  //rerenders the data on the task list
  const rerenderData = (data) => {
    setUserData(data);
  }


  //was supposed to rerender the Calendar, but this is currently not doing anything
  const rerenderCalendar = () => {
    setCurrentCalendar();
  }

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
          .then((data) => setUserData(data))
          .catch((err) => console.log('Error deleting a task', err));
      }
    }
  }

  return (
    <div>
      Your Task List Items 
      <div>
        <Table bordered hover>
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
        <Calendar />
        <AddTasks rerenderCalendar={rerenderCalendar} rerenderData={rerenderData}/>
      </div>
    </div>
    
  )
}

export default TaskList;