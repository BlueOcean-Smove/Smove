import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import moment from 'moment';
import { FaTrashAlt } from 'react-icons/fa';

const Tasks = ({task}) => {
  const [selected, setSelected] = useState(false);

  const selectedTask = (task) => {
    setSelected(!selected);
  }

  return (
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
          <tr>
            <td>
              <Form.Check aria-label="option 2" onClick={selectedTask} />
            </td>
            <td>
              {task.taskName}
            </td>
            <td>
              {task.location}
            </td>
            <td>
              {moment(task.startDate).format("MMMM Do YYYY, h:mm:ss a")}
            </td>
            <td>
              {moment(task.endDate).format("MMMM Do YYYY, h:mm:ss a")}
            </td>
            <td>
              {task.assignedTo.map((user, idx) => 
                <div key={idx}>
                  {user}
                </div>
              )}
            </td>
            <td>
              <a href={task.company.url} rel="external" target="_self" target="_blank">{task.company.companyName}</a>
            </td>
            <td>
              {task.status}
            </td>
            <td>
              <FaTrashAlt />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Tasks;