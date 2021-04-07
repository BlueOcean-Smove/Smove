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
  const [currentCalendar, setCurrentCalendar] = useState(<iframe src="https://calendar.google.com/calendar/embed?src=blueoceansmove%40gmail.com&ctz=America%2FLos_Angeles" style={{border: 0, width:"800px", height:"600px", frameborder:"0", scrolling:"no"}}></iframe>)
  // const { tasksFromDb, setTasksFromDb } = useState(null)

  // const setTaskState = () => {
  //   setTasksFromDb(userData.smoves.filter(smove => smove.isCurrentSmove)[0].tasks)
  // }

  // useEffect(() => {
  //   userData ? setTaskState() : null;
  // }, [])

  // useEffect(() => {
  //   setTasksFromDb
  // }, [userData])

  const rerenderData = (data) => {
    setUserData(data);
  }

  const rerenderCalendar = () => {
    setCurrentCalendar(<iframe src="https://calendar.google.com/calendar/embed?src=blueoceansmove%40gmail.com&ctz=America%2FLos_Angeles" style={{border: 0, width:"800px", height:"600px", frameborder:"0", scrolling:"no"}}></iframe>);
  }

  const currentSmoveFromDb = userData.smoves.filter(smove => smove.isCurrentSmove)[0]
  const tasksFromDb = currentSmoveFromDb.tasks

  const deleteTask = (taskName, assignedTo) => {
    console.log(location);
    // let dataTasks = ;
    
    // console.log('new tasks', newTasks);
    // currentSmove.tasks = newTasks;
    // let newSmoves = userData.smoves.filter

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
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Users</th>
              <th>Company</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {tasksFromDb ? tasksFromDb.map((task, idx) => 
              <Tasks deleteTask={deleteTask} key={idx} task={task} />
              ) : null}
          </tbody>
        </Table>
        <Calendar currentCalendar={currentCalendar} />
        <AddTasks rerenderCalendar={rerenderCalendar} rerenderData={rerenderData}/>
      </div>
    </div>
    
  )
}

export default TaskList;