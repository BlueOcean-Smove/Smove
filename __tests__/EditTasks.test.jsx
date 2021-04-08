import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import EditTasks from '../client/components/Tasks/EditTasks';
import { UserDataContext } from '../client/components/Data.jsx';


const sampleUserData={
  userData:{
    email:'aa',
    image:'aa',
    name: 'aa',
    smoves:[
      {
        isCurrentSmove: true
      }
    ]
},
setUserData: jest.fn()
};

const sampleEditTask={
  rerenderData:jest.fn(),
  show: true,
  handleClose: jest.fn(),
  taskNameEdit: 'task2',
  locationEdit: 'old house',
  startDateEdit: '2021-04-20T09:00:00-07:00',
  endDateEdit: '2021-04-20T09:00:00-07:00',
  assignedToEdit: ["someUserEmail1", "someUserEmail2"],
  statusEdit: "not started",
  companyEdit: {
    companyName: "Great company 1",
    url: "www.greatcompany1.com"
  },
  categoryEdit: "moving",
}


describe('Tasks', () => {
  test('renders Task Table:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <EditTasks {...sampleEditTask}/>
    </UserDataContext.Provider>
);
    screen.getByTestId('editTaskModal');
  });
});
