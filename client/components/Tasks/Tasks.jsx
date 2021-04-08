import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditTasks from './EditTasks';


import { UserDataContext } from '../Data.jsx';

const Tasks = ({task, deleteTask, editTask, rerenderData}) => {
  const { taskName, location, startDate, endDate, assignedTo, category, status, company } = task;
  const [selected, setSelected] = useState(false);
  const [show, setShow] = useState(false);
  const { userData, setUserData } = useContext(UserDataContext);

  //closes the edit task modal
  const handleClose = () => setShow(false);

  //opens the edit task modal
  const handleShow = () => setShow(true);

  return (
    <>

          <tr>
            <td>
              {taskName}
            </td>
            <td>
              {location}
            </td>
            <td>
              {moment(startDate).format("MMMM Do YYYY, h:mm:ss a")}
            </td>
            <td>
              {moment(endDate).format("MMMM Do YYYY, h:mm:ss a")}
            </td>
            <td>
              {assignedTo.map((user, idx) => 
                <div key={idx}>
                  {user}
                </div>
              )}
            </td>
            <td>
              <a href={company.url} rel="external" target="_self" target="_blank">{company.companyName}</a>
            </td>
            <td>
              {category}
            </td>
            <td>
              {status}
            </td>
            <td>
              <FaTrashAlt onClick={() => deleteTask(taskName, assignedTo)}/>
              <FaEdit onClick={handleShow}/>
              <EditTasks 
                rerenderData={rerenderData}
                taskNameEdit={taskName} 
                locationEdit={location} 
                startDateEdit={startDate}
                endDateEdit={endDate}
                assignedToEdit={assignedTo}
                statusEdit={status}
                companyEdit={company}
                categoryEdit={category}
                handleClose={handleClose} 
                show={show}
              />
            </td>
          </tr>
    </>
  )
}

export default Tasks;