import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Tasks from '../client/components/Tasks/Tasks';
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

const sampleTask={

  task:
    {
        taskName: 'task1',
        location: 'old house',
        startDate: '2021-04-20T09:00:00-07:00',
        endDate: '2021-04-20T09:00:00-07:00',
        assignedTo: ["someUserEmail1", "someUserEmail2"],
        category: "moving",
        status: "not started",
        company: {
          companyName: "Great company 1",
          url: "www.greatcompany1.com"
        }
    },
  deleteTask: jest.fn(),
  editTask: jest.fn(),
  rerenderData: jest.fn()
}

// deleteTask = jest.fn()
// const editTask=jest.fn()
// const rerenderData=jest.fn()



describe('Tasks', () => {
  test('renders Task Table:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <Tasks {...sampleTask} />
    </UserDataContext.Provider>
);
    screen.getByTestId('taskRow');
  });
});
