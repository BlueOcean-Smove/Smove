import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Tasks from '../client/components/Tasks/Tasks';
import { UserDataContext } from '../client/components/Data.jsx';
import sampleData from '../client/test-data.js';

const sampleUserData={
  userData:sampleData.someUserEmail,
setUserData: jest.fn()
};


const sampleTask={
  task: sampleData.someUserEmail.smoves[0].tasks[0],
  deleteTask: jest.fn(),
  editTask: jest.fn(),
  rerenderData: jest.fn()
}

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

