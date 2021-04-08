import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import LocalMovingServices from './LocalCompanies/LocalMovingServices';
import Login from './login/Login';
import Logout from './login/Logout';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Inventory from './inventory/Inventory';
import TaskList from './Tasks/TaskList';
import { UserDataContextProvider } from './Data';

// import from the file below to have access to context
// import { UserDataContext } from '../login/Data.jsx' <-- path to data file in login folder';

// declare this within func to set userData
// you will also need to define useContext in your import react
// const { userData } = useContext(UserDataContext);

const GeneralStyle = styled.div`
  background: rgba(62, 130, 140, 0.9);
  font-family: calibri,sans-serif;
  font-weight: 700;
  font-style: normal;
`;

const App = () => {

  return (
    <GeneralStyle>
      <UserDataContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/" component={ Add in your component file } />
          <Route exact path="/TaskList" component={ Add in your component file } /> */}
          <Route exact path="/Inventory" component={Inventory} />
          {/* <Route exact path="/LocalMovingServices" component={ Add in your component file } />
          {/* <Route exact path="/" component={ Add in your component file } /> */}
          <Route exact path="/TaskList" component={TaskList} />
          {/* <Route exact path="/Inventory" component={ Add in your component file } /> */}
          <Route exact path="/LocalMovingServices" component={LocalMovingServices} />
          {/* <Route exact path="/Login" component={ Add in your component file } /> */}
        </BrowserRouter>
      </UserDataContextProvider>
    </GeneralStyle>
  )
}

export default App;
