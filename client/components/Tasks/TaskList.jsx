import React, { useState } from 'react';
import exampleData from '../../test-data.js';
import Tasks from './Tasks.jsx';

const TaskList = () => {
  const [sampleData, setSampleData] = useState(exampleData.someUserEmail.smoves);

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
      </div>
    </div>
    
  )
}

export default TaskList;