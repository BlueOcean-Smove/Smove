import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Modal from '../client/components/Login/Modal';
import { UserDataContext } from '../client/components/Data.jsx';
import sampleData from '../client/test-data.js';

const sampleUserData={
  userData:sampleData.someUserEmail,
setUserData: jest.fn()
};

describe('Login Modal', () => {
  test('render close button', () => {
    render(
      <UserDataContext.Provider value={sampleUserData}>
    <Modal
      showModal={true}
      setShowModal={() => {}}
    />
    </UserDataContext.Provider>);
    screen.getByTestId('loginModalButton');
  });
});

describe('Login Modal', () => {
  test('doesnt render Modal', () => {
    render(
      <UserDataContext.Provider value={sampleUserData}>
    <Modal
      showModal={false}
      setShowModal={() => {}}
    />
    </UserDataContext.Provider>);
    const result = screen.queryByTestId('loginModalButton');
    expect(result).toBeNull();
  });
});