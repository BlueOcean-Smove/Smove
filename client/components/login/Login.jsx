import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '212262246283-v6uu3qkn500rakt8i924bap5p2iqs64c.apps.googleusercontent.com'
      })
        .then(() => {
          window.gapi.signin2.render('g-signin2', {
            'scope': 'profile email',
            'width': 100,
            'height': 30,
            'longtitle': false,
            'theme': 'dark',
            'onsuccess': this.onSignIn,
            // 'onfailure': this.onFailure
          })
        })
        .catch(() => console.log('could not load the google modal'));
    })
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('hi from sign in')
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // search database for the userprofile
    // if found
      // load the current smove data
      // go to Smove dashboard
      // populate the dashboard with the current data
    // else
      // create a new user
      // bring up add smove modal
      //
    // change login button to change user button
    // add logout button
  }

  render() {
    return (
      <div>
        <div id="g-signin2" data-onsuccess={this.onSignIn}></div>
      </div>
    )
  }
}

export default Login;