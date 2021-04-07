import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { FaTrashAlt } from 'react-icons/fa';
import { UserDataContext } from '../Data.jsx';

const Tasks = ({task, deleteTask, editTask}) => {
  const { taskName, location, startDate, endDate, assignedTo, category, status, company } = task;
  const [selected, setSelected] = useState(false);
  const { userData, setUserData } = useContext(UserDataContext);
  const selectedTask = (task) => {
    setSelected(!selected);
  }

  return (
    <>

          <tr>
            <td>
              <Form.Check aria-label="option 2" onClick={selectedTask} />
            </td>
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
              {status}
            </td>
            <td>
              <FaTrashAlt onClick={() => deleteTask(taskName, assignedTo)}/>
              {/* <AiFillEdit /> */}
              {/* <Button onClick={editTask} >Edit</Button> */}
            </td>
          </tr>
    </>
  )
}

export default Tasks;