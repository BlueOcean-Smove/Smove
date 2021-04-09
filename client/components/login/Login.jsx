import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';
import InfoModal from './Modal';
import Profile from './Profile';
import styled from 'styled-components';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const { userData, setUserData } = useContext(UserDataContext);
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [userLoginNoSmoves, setUserLoginNoSmoves] = useState(false);

  // logging in a user with Google email
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '212262246283-v6uu3qkn500rakt8i924bap5p2iqs64c.apps.googleusercontent.com'
      })
        .then(() => {
          window.gapi.signin2.render('g-signin2', {
            'scope': 'profile email',
            'width': 150,
            'height': 50,
            'longtitle': false,
            'theme': 'dark',
            'onsuccess': onSignIn,
          })
        })
    })
  }, [])

  // after sign in get user data
  const onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();

    const name = profile.getName();
    const email = profile.getEmail();
    const image = profile.getImageUrl()

    setName(name);
    setEmail(email);
    setImage(image);

    // get the user document from the database
    axios.get(`/auth/${email}`)
      .then(({ data }) => {
        console.log('user obj from database: ', data);
        // if there is no document, create a blank
        if (!data || !data.name) {
          axios.post(`/auth/`, {
            name: name,
            email: email,
            image: image
          })
            .then(({ data }) => {
              setUserData(data)
              window.location.reload(false);
            })
            .catch((err) => console.log('error in posting data: ', err))
        } else {
          if (name === '') {
            data.name = name,
            data.image = image
          }
          setUserData(data)
        }
        setShowProfile(true);
      })
      .catch((err) => console.log('error in get /auth/:email ', err))
  }

  return (
    <div>
      <IntroWrapper>
        {!name && (
          <WelcomeMessage id="welcome-no-name">
            Welcome GUEST. Please sign in!
          </WelcomeMessage>
        )}
        {!!name && (
          <>
            <ProfilePic id="welcome-img" src={image} alt="Your user profile picture" />
            <WelcomeMessage id="welcome-name">
              Welcome {name}!
            </WelcomeMessage>
            <WelcomeMessage id="welcome-email">
              Currently signed in as {email}
            </WelcomeMessage>
          </>
        )}
      </IntroWrapper>
      {!showProfile && (
        <LoginButtonDiv id="g-signin2"></LoginButtonDiv>
      )}
      {showProfile && (
        <>
          <Divider />
          <Profile smovesArr={userData.smoves} />
        </>
      )}
    </div>
  )
}

export default Login;

// add styled components
var IntroWrapper = styled.div`
  margin-left: 100px;
  margin-top: 20px;
  display: block;
`
var LoginButtonDiv = styled.div`
  margin-top: 20px;
  margin-left: 100px;
  display: block;
`
var ProfilePic = styled.img`
  height: 63px;
  width: 63px;
  border-style: solid;
  border-radius: 50%;
  border-width: 2px;
  border-color: ming;
  margin-right: 20px;
  float: left;
`
var WelcomeMessage = styled.p`
  display: block;
`
var Divider = styled.hr`
  margin-top: 20px;
  margin-bottom: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: ming;
  margin-left: 100px;
  margin-right: 100px;
`