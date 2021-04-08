import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import BussinessCard from '../client/components/LocalCompanies/BussinessCard';
import { UserDataContext } from '../client/components/Data.jsx';


const sampleBusinessList={
  id: 1,
  image_url:"www.google.com",
  url: 'link',
  name:"sample1",
  rating: 5,
  display_phone:'12345',
  location:{
    display_address: "address_1",
  }
}

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


describe('Business Card', () => {
  test('renders image on carousel:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <BussinessCard data={sampleBusinessList}/>
    </UserDataContext.Provider>
);
    screen.getByTestId('businessImage');
  });
});

describe('Business Card', () => {
  test('renders name of the business on carousel:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <BussinessCard data={sampleBusinessList}/>
    </UserDataContext.Provider>
);
    screen.getByTestId('businessName');
  });
});

describe('Business Card', () => {
  test('renders favorite button on carousel:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <BussinessCard data={sampleBusinessList}/>
    </UserDataContext.Provider>
);
    screen.getByTestId('favorite');
  });
});

describe('Business Card', () => {
  test('renders address on carousel:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <BussinessCard data={sampleBusinessList}/>
    </UserDataContext.Provider>
);
    screen.getByTestId('businessAddress');
  });
});

describe('Business Card', () => {
  test('renders phone number on carousel:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <BussinessCard data={sampleBusinessList}/>
    </UserDataContext.Provider>
);
    screen.getByTestId('businessPhone');
  });
});

describe('Business Card', () => {
  test('renders website on carousel:', () => {

    render(
    <UserDataContext.Provider value={sampleUserData}>
        <BussinessCard data={sampleBusinessList}/>
    </UserDataContext.Provider>
);
    screen.getByTestId('businessUrl');
  });
});

