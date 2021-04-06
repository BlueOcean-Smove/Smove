import React, { useState } from 'react';
import exampleData from '../../test-data.json';
import Tasks from './Tasks.jsx';
import Calendar from './Calendar';

const TaskList = () => {
  const [sampleData, setSampleData] = useState(exampleData.smoves);

  const currentSmove = () => {
    for (let i = 0; i < sampleData.length; i++) {
      if (sampleData[i].isCurrentSmove) {
        setSampleData(sampleData[i].tasks);
      }
    }
  }
  
  currentSmove();
  
  return (
    <div>
      <div>
        {sampleData.map((task, idx) => 
          <Tasks key={idx} task={task} />
        )}
        <Calendar />
      </div>
    </div>
    
  )
}

export default TaskList;