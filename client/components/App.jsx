import React, { useState, useEffect } from 'react';
import Login from './Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Inventory from './inventory/Inventory.jsx';
import Tasks from './Tasks/TaskList.jsx';

// import component files to use for routes


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Login />
      {/* <Route exact path="/" component={ Add in your component file } />
      <Route exact path="/TaskList" component={ Add in your component file } /> */}
      <Route exact path="/Inventory" component={Inventory} />
      {/* <Route exact path="/LocalMovingServices" component={ Add in your component file } />
      {/* <Route exact path="/" component={ Add in your component file } /> */}
      <Route exact path="/TaskList" component={Tasks} />
      {/* <Route exact path="/Inventory" component={ Add in your component file } />
      <Route exact path="/LocalMovingServices" component={ Add in your component file } />
      <Route exact path="/Login" component={ Add in your component file } /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
