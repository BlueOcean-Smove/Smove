import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import LocalMovingServices from './LocalCompanies/LocalMovingServices';
import Login from './login/Login';
import Logout from './login/Logout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Inventory from './inventory/Inventory';
import TaskList from './Tasks/TaskList';
import { UserDataContextProvider } from './Data';

// import from the file below to have access to context
// import { UserDataContext } from '../login/Data.jsx' <-- path to data file in login folder';

// declare this within func to set userData
// you will also need to define useContext in your import react
// const { userData } = useContext(UserDataContext);


const App = () => {

  return (
    <GeneralStyle>
      <UserDataContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Login} />
          <Route exact path="/Inventory" component={Inventory} />
          <Route exact path="/TaskList" component={TaskList} />
          <Route exact path="/LocalMovingServices" component={LocalMovingServices} />
        </BrowserRouter>
      </UserDataContextProvider>
    </GeneralStyle>
  )
}

export default App;

// adding styled components
var GeneralStyle = styled.div`
  height: 100%;
  background: #fff;
  font-family: calibri,sans-serif;
  font-weight: 700;
  font-style: normal;
`;