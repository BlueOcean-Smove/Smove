import React, { useState, useEffect } from 'react';
import Login from './login/Login';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Header from './Header.jsx';

// import component files to use for routes


const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Login />
      {/* <BrowserRouter>
      <Header />
      <Route exact path="/" component={ Add in your component file } />
      <Route exact path="/TaskList" component={ Add in your component file } />
      <Route exact path="/Inventory" component={ Add in your component file } />
      <Route exact path="/LocalMovingServices" component={ Add in your component file } />
      <Route exact path="/Login" component={ Add in your component file } />
      </BrowserRouter> */}
    </div>
  )
}

export default App;
