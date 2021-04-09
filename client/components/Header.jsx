import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from './login/Logout';
import { UserDataContext } from './Data';
import styled from 'styled-components';

const Header = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Logo>Smove</Logo>
        <Nav className="mr-auto">
          <StyledLink to="/" >Profile</StyledLink>
          {userData.smoves && userData.smoves.length !== 0 && (
            <>
              <StyledLink to="/TaskList" >Task List</StyledLink>
              <StyledLink to="/Inventory">Inventory</StyledLink>
              <StyledLink to="/LocalMovingServices">Local Moving Services</StyledLink>
            </>
          )}
        </Nav>
        <Form inline>
          <Logout />
        </Form>
      </Navbar>
    </React.Fragment>
  )
}

export default Header;

// adding styled components
var Logo = styled.h1`
  color: white;
  margin-left: 50px;
  margin-right: 50px;
`;

var StyledLink = styled(Link)`
  color: #ccc;
  font-size: 24px;
  margin: 0 10px;
  font-family: calibri,sans-serif;
`;

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
