import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InfoModal from './Modal';
import SmoveTable from './SmoveTable';
import { UserDataContext } from '../Data.jsx';
import styled from 'styled-components';

// render the user profile data
const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSmove, setCurrentSmove] = useState(null);
  const [otherSmoves, setOtherSmoves] = useState([]);
  const [teamEmail, setTeamEmail] = useState('');
  const [newSmoveToggle, setNewSmoveToggle] = useState(true);
  const { userData, setUserData } = useContext(UserDataContext);
  const img1 = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MXwxM[…]0by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80";
  const img2 = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*";

  // find the current smove in the user data document
  const findCurrentSmove = () => {
    userData.smoves.forEach((smove) => {
      if (smove.isCurrentSmove) {
        setCurrentSmove(smove);
      }
    })
  }

  // collect the user input for team member email
  const handleChange = (event) => {
    setTeamEmail(event.target.value);
  }

  // set the new team member
  const handleClick = () => {
    // check the database for that user
    axios.get(`/auth/${teamEmail}`)
    .then(({ data }) => {
      // create a new user if not found
      if (!data || !data.name) {
        axios.post(`/auth/`, {
          email: teamEmail
        })
      }
    })
    .then(() => {
        userData.smoves.forEach((smove) => {
          if (smove.isCurrentSmove) {
            smove.moveTeam.push(teamEmail)
          };
        })
        axios.patch(`/user/${userData.email}`, {data: userData.smoves})
        .then(({ data }) => console.log('new team member added: ', data))
        .catch((err) => console.log('error in patch request to add user: ', err))
      })
      .then(() => setNewSmoveToggle(!newSmoveToggle))
      .catch((err) => console.log('error in get /auth/:email ', err))
    }

  // fire the new render
  useEffect(findCurrentSmove, [showModal, userData])

  return (
    <div>
      {showModal && <InfoModal showModal={showModal} setShowModal={setShowModal} />}
      <CurrentSmoveTitle>YOUR CURRENT SMOVE</CurrentSmoveTitle>
      {!!currentSmove ? (
        <>
          <CurrentSmoveName>{currentSmove.smoveName}</CurrentSmoveName>
          <CurrentSmoveWrapper>
            <Figure>
              <HomeImage id="oldhouse" src={img1} alt="icon of old home" />
              {!!currentSmove && <HomeFigCaption>{currentSmove.oldAddress}</HomeFigCaption>}
            </Figure>
            <Arrow id="arrow">&#8680;</Arrow>
            <Figure>
              <HomeImage id="newhouse" src={img2} alt="icon of new home" />
              {!!currentSmove && <HomeFigCaption>{currentSmove.newAddress}</HomeFigCaption>}
            </Figure>
          </CurrentSmoveWrapper>
          <SmovesWrapper>
            <label>
              Add team member's email to current Smove:
              <input type="text" name="add" onChange={handleChange}/>
            </label>
            <button id="addteam" onClick={handleClick}>
              ADD
            </button>
          </SmovesWrapper>
        </>
      ) : (
        <SmovesWrapper>You do not have any Smoves to display. Create one below!</SmovesWrapper>
      )}
      <Divider />
      <SmoveButton id="newsmove" onClick={() => setShowModal(true)}>Create New Smove</SmoveButton>
      {!!userData && userData.smoves.length !== 0 && (
        <SmoveTable smoves={newSmoveToggle} />
      )}
    </div>
  )
}

export default Profile;

// add styled components
var CurrentSmoveTitle = styled.h3`
  font-size: 1em;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 100px;
  color: darkgray;
`
var CurrentSmoveName = styled.h3`
  font-size: 2em;
  margin-left: 100px;
  margin-bottom: 20px;
`
var CurrentSmoveWrapper = styled.div`
  display: flex;
`
var SmoveButton = styled.button`
  display: block;
  margin-bottom: 25px;
  margin-top: 50px;
  margin-left: 100px;
  border-style: solid;
  border-color: darkgray;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 5px 10px;
  &:hover{
    background-color: darkgray;
    color: white;
  }
`
var HomeImage = styled.img`
  height: 200px;
  width: 200px;
  border-style: solid;
  border-weight: 1px;
  border-radius: 50px;
  border-color: white;
  object-fit: cover;
  display: inline-block;
`
var HomeFigCaption = styled.figcaption`
  text-align: center;
`
var Arrow = styled.h3`
  font-size: 3em;
  display: inline-flex;
  align-items: center;
`
var Figure = styled.figure`
  display: inline-block;
  margin-left: 100px;
  margin-right: 100px;
`
var Divider = styled.hr`
  margin-top: 25px;
  margin-bottom: 25px;
  border-width: 1px;
  border-style: solid;
  border-color: darkgray;
  margin-left: 100px;
  margin-right: 100px;
`
var SmovesWrapper = styled.div`
  margin-left: 100px;
  margin-top: 40px;
  display: block;
`