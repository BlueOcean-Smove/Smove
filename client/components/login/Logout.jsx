import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

const Logout = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const history = useHistory();
  const onSignOut = (googleUser) => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('signed out');
    });
    // setLoggedOut(true);
    history.push('/');
  }

  return (
    <button>
      <a className="logout-btn" onClick={() => onSignOut()}>Sign Out</a>
    </button>
  )
}

export default Logout;