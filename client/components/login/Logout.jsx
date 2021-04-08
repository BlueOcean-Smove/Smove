import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <button>
      <a className="logout-btn" onClick={() => onSignOut()}>Sign Out</a>
    </button>
  )
}

export default Logout;