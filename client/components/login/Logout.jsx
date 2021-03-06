import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// styled components
const SignOutButton = styled.button`
  background-color: #4285F4;
  border-style: solid;
  border-radius: 5px;
  border-color: #4285F4;
  border-width: 1px;
  padding: 5px 10px;
`
const SignOutText = styled.a`
  color: white;
  font-family: 'Roboto', sans-serif;
`
const Logout = () => {
  const history = useHistory();
  const onSignOut = (googleUser) => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('signed out');
    });
    history.push('/');
  }

  return (
    <SignOutButton>
      <SignOutText className="logout-btn" onClick={() => onSignOut()}>Sign Out</SignOutText>
    </SignOutButton>
  )
}

export default Logout;

