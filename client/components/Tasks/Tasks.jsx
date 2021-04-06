import React, { useState, useContext } from 'react';
import { UserData } from '../login/Login.jsx';

const Tasks = ({task}) => {
  const [selected, setSelected] = useState(false);
  const [complete, setComplete] = useState(false);
//   console.log(task);
  const { UserData } = useContext(UserData);


//   const assignedUsers = () => {
//     if (task.assignedTo.length !== 0 ) {
//       for (let i = 0; )
//     }
//   }

  return (
    <div>
      {task.name}
      {task.location}
      {task.startDate}
      {task.endDate}
      {task.status}
      {/* {assignedUsers()} */}
    </div>
  )
}

export default Tasks;