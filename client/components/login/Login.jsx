import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';
import InfoModal from './Modal';
import Profile from './Profile';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  margin-left: 100px;
  margin-top: 20px;
  display: block;
`
const LoginButtonDiv = styled.div`
  margin-top: 20px;
  margin-left: 100px;
  display: block;
`
const ProfilePic = styled.img`
  height: 63px;
  width: 63px;
  border-style: solid;
  border-radius: 50%;
  border-width: 2px;
  border-color: darkgray;
  margin-right: 20px;
  float: left;
`
const WelcomeMessage = styled.p`
  display: block;
`
const Divider = styled.hr`
  margin-top: 20px;
  margin-bottom: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: darkgray;
  margin-left: 100px;
  margin-right: 100px;
`

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [userObj, setUserObj] = useState({});
  const { userData, setUserData } = useContext(UserDataContext);
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [userLoginNoSmoves, setUserLoginNoSmoves] = useState(false);

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
            // 'onfailure': this.onFailure
          })
        })
    })
  }, [])

  const onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();

    const name = profile.getName();
    const email = profile.getEmail();
    const image = profile.getImageUrl()

    setName(name);
    setEmail(email);
    setImage(image);

    axios.get(`/auth/${email}`)
      .then(({ data }) => {
        console.log('user obj from database: ', data);
        if (!data || !data.name) {
          axios.post(`/auth/`, {
            name: name,
            email: email,
            image: image
          })
            .then(({ data }) => {
              setUserObj(data)
              setUserData(data)
              window.location.reload(false);
            })
            .catch((err) => console.log('error in posting data: ', err))
        } else {
          setUserObj(data)
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
          <Profile smovesArr={userObj.smoves} />
        </>
      )}
    </div>
  )
}

export default Login;