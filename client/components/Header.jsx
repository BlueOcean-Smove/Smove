import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from './login/Logout';

const Header = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <input type="image" src="https://i.ibb.co/7nGVFvC/smove-New-Big.png" alt="Smove" style={{width: 250 + 'px'}}/>
        <Nav className="mr-auto">
          <Link to="/">Profile</Link>
          <Link to="/TaskList">Task List</Link>
          <Link to="/Inventory">Inventory</Link>
          <Link to="/LocalMovingServices">Local Moving Services</Link>
        </Nav>
        <Form inline>
          <Logout />
        </Form>
      </Navbar>
    </React.Fragment>
  )
}

export default Header;

//OG Format
{/* <div>
  <h1>Smove</h1>
  <h1>Add logo Here</h1>
  <Link to="/">
    <h1>User Profile</h1>
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
  </Link>*/}
