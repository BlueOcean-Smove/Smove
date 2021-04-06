import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <h1>Smove</h1>
    <h1>Add logo Here</h1>
    <Link to="/">
      <h1>User Profile</h1>
      {/* This is the main page? */}
    </Link>
    <Link to="/TaskList">
      <h1>Task List</h1>
    </Link>
    <Link to="/Inventory">
      <h1>Inventory</h1>
    </Link>
    <Link to="/LocalMovingServices">
      <h1>Local Moving Services</h1>
    </Link>
    <Link to="/Login">
      <h1>Login</h1>
    </Link>
</div>
  )

}

export default Header;