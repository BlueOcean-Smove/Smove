import React, { useState, useContext } from 'react';
import exampleData from '../../test-data.json';
import Tasks from './Tasks.jsx';
import Calendar from './Calendar';
import AddTasks from './AddTasks';
import { UserDataContext } from '../Data.jsx';

const TaskList = () => {
  const [sampleData, setSampleData] = useState(exampleData.smoves);
  const { userData, setUserData } = useContext(UserDataContext);
  
  return (
    <div>
      Your Task List Items 
      <div>
        {userData.smoves.filter(smove => smove.isCurrentSmove)[0].tasks.map((task, idx) => 
          <Tasks key={idx} task={task} />
        )}
        <Calendar />
        <AddTasks />
      </div>
    </div>
    
  )
}

export default TaskList;