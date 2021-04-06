import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      image: '',
      userObj: {}
    }

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
            'width': 250,
            'height': 50,
            'longtitle': false,
            'theme': 'dark',
            'onsuccess': this.onSignIn,
            // 'onfailure': this.onFailure
          })
        })
    })
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    const name = profile.getName();
    const email = profile.getEmail();
    const image = profile.getImageUrl()

    this.setState({ name, email, image });

    axios.get(`/auth/${email}`)
      .then(({ data }) => {
        console.log('user obj from database: ', data);
        if (!data) {
          axios.post(`/auth/`, {
            name: name,
            email: email,
            image: image
          })
        } else {
          this.setState({
            userObj: data
          })
        }
      })
      .catch((err) => console.log('error in get /auth/:email ', err))
  }

  render() {
    return (
      <div>
        <div id="g-signin2" data-onsuccess={this.onSignIn}></div>
        {!!this.state.name && (
          <div>
            <span id="welcome-name">
              Welcome {this.state.name}!
            </span>
            <span id="welcome-email">
              Currently signed in as {this.state.email}
            </span>
            <img id="welcome-img" src={this.state.image} alt="Your user profile picture" />
          </div>
        )}
      </div>
    )
  }
}

export default Login;