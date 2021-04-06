import React from 'react';

const Logout = () => {

  const onSignOut = (googleUser) => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('signed out');
    });
  }

  return (
    <button>
      <a className="logout-btn" onClick={() => onSignOut()}>Sign Out</a>
    </button>
  )
}

export default Logout;