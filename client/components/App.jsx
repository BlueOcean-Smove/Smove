import React, { useState, useEffect, useContext } from 'react';
import LocalMovingServices from './LocalCompanies/LocalMovingServices';
import Login from './login/Login';
import Logout from './login/Logout';
import { BrowserRouter, Route } from 'react-router-dom';
<<<<<<< HEAD
import Header from './Header.jsx';
import Inventory from './inventory/Inventory.jsx';
import TaskList from './Tasks/TaskList.jsx';
import { UserDataContextProvider } from './Data.jsx';
=======
import Header from './Header';
import Inventory from './inventory/Inventory';
import TaskList from './Tasks/TaskList';
import { UserDataContextProvider } from './Data';
>>>>>>> moved Data.jsx into root and connected to Mongo Cluster

// import from the file below to have access to context
// import { UserDataContext } from '../login/Data.jsx' <-- path to data file in login folder';

// declare this within func to set userData
// you will also need to define useContext in your import react
// const { userData } = useContext(UserDataContext);

const App = () => {

  return (
    <div>
      <UserDataContextProvider>
        <BrowserRouter>
          <Header />
          <Login />
          <Logout />
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
    </div>
  )
}

export default App;
