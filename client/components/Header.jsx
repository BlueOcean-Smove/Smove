import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

<<<<<<< HEAD
const Header = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Smove</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/"><div>User Profile</div></Link></Nav.Link>
          <Nav.Link><Link to="/TaskList"><div>Task List</div></Link></Nav.Link>
          <Nav.Link><Link to="/Inventory"><div>Inventory</div></Link></Nav.Link>
          <Nav.Link><Link to="/LocalMovingServices"><div>Local Moving Services</div></Link></Nav.Link>
          <Nav.Link><Link to="/Login"><div>Login</div></Link></Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-info">Login DOES NOT ATM</Button>
        </Form>
      </Navbar>
    </React.Fragment>
  )
}
=======
const Header = () => (
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
>>>>>>> Small changes

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
