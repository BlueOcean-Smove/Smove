import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from './Data.jsx';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [userObj, setUserObj] = useState({});
  const { userData, setUserData } = useContext(UserDataContext);

  useEffect(() => {
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
            'onsuccess': onSignIn,
            // 'onfailure': this.onFailure
          })
        })
    })
  }, [])

  const onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    const name = profile.getName();
    const email = profile.getEmail();
    const image = profile.getImageUrl()

    setName(name);
    setEmail(email);
    setImage(image);

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
          setUserObj(data)
          setUserData(data)
        }
      })
      .catch((err) => console.log('error in get /auth/:email ', err))
  }


  return (
    <div>
      <div id="g-signin2" data-onsuccess={onSignIn}></div>
      {!!name && (
        <div>
          <span id="welcome-name">
            Welcome {name}!
          </span>
          <span id="welcome-email">
            Currently signed in as {email}
          </span>
          <img id="welcome-img" src={image} alt="Your user profile picture" />
        </div>
      )}
    </div>
  )
}

export default Login;