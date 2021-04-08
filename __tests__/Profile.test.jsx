import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Profile from '../client/components/Login/Profile';
import { UserDataContext } from '../client/components/Data.jsx';
import sampleData from '../client/test-data.js';

const sampleUserData={
  userData:sampleData,
setUserData: jest.fn()
};

describe('Profile', () => {
  test('show YOUR CURRENT SMOVE text:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <Profile smovesArr={sampleData.someUserEmail.smoves} />
    </UserDataContext.Provider>
);
    screen.getByText('YOUR CURRENT SMOVE');
  });
});
