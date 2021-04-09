import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';
import InfoModal from './Modal';
import Profile from './Profile';
import styled from 'styled-components';

// styled components

const IntroWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-left: 100px;
  margin-top: 20px;
  display: block;
`
const LoginWrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto;
  display: flex;
`
const LoginButtonDiv = styled.div`
  margin-top: 20px;
  display: block;
`
const ProfilePic = styled.img`
  height: 63px;
  width: 63px;
  border-style: solid;
  border-radius: 50%;
  border-width: 2px;
  border-color: ming;
  margin-right: 20px;
  float: left;
`
const WelcomeMessage = styled.p`
  font-family: 'Ubuntu', sans-serif;
  display: block;
  text-align: center;
  margin-left: -100px;
  margin-top: 70px;
`
const GettingStarted = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  text-align: center;
  margin-top: 100px;
  margin-left: -100px;
`
const Tagline = styled.h4`
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  margin-left: -100px;
  margin-top: 100px;
`
const UserInfo = styled.p`
  display: block;
`
const Divider = styled.hr`
  margin-top: 20px;
  margin-bottom: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: ming;
  margin-left: 100px;
  margin-right: 100px;
`

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
          <>
            <GettingStarted>
              Getting Started
            </GettingStarted>
            <Tagline>
              Welcome to your one-stop-shop to turn your <em>move</em> into a <em>Smove</em>
            </Tagline>
            <WelcomeMessage id="welcome-no-name">
              Welcome GUEST. Please sign in!
            </WelcomeMessage>
          </>
        )}
        {!!name && (
          <div>
            <ProfilePic id="welcome-img" src={image} alt="Your user profile picture" />
            <UserInfo id="welcome-name">
              Welcome {name}!
            </UserInfo>
            <UserInfo id="welcome-email">
              Currently signed in as {email}
            </UserInfo>
          </div>
        )}
      </IntroWrapper>
      {!showProfile && (
        <LoginWrapper>
          <LoginButtonDiv id="g-signin2"></LoginButtonDiv>
        </LoginWrapper>
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

