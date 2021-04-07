import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InfoModal from './Modal';
import SmoveTable from './SmoveTable';
import { UserDataContext } from '../Data.jsx';

const Profile = ({ smovesArr }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentSmove, setCurrentSmove] = useState(null);
  const [otherSmoves, setOtherSmoves] = useState([]);
  const [teamEmail, setTeamEmail] = useState('');
  const { userData, setUserData } = useContext(UserDataContext);
  const img1 = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MXwxM[…]0by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80";
  const img2 = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*";

  const findCurrentSmove = () => {
    smovesArr.forEach((smove) => {
      if (smove.isCurrentSmove) {
        setCurrentSmove(smove);
      } else {
        newOtherSmoves = otherSmoves;
        newOtherSmoves.push({smoveName: smove.smoveName, moveTeam: smove.smoveTeam});
        setOtherSmoves(newOtherSmoves);
      }
    })
  }
  useEffect(findCurrentSmove, [])

  const handleChange = (event) => {
    setTeamEmail(event.target.value);
  }

  const handleClick = () => {
    axios.get(`/auth/${teamEmail}`)
      .then(({ data }) => {
        if (!data || !data.name) {
          axios.post(`/auth/`, {
            email: teamEmail
          })
        }
      })
      .then (() => {
        userData.smoves.forEach((smove) => {
          if (smove.isCurrentSmove) {
            smove.moveTeam.push(teamEmail)
          };
        })
        axios.patch(`/user/${userData.email}`, {data: userData.smoves})
          .then(({ data }) => console.log('new team member added: ', data))
          .catch((err) => console.log('error in patch request to add user: ', err))
      })
      .catch((err) => console.log('error in get /auth/:email ', err))
  }

  return (
    <div>
      <button id="newsmove" onClick={() => setShowModal(true)}>Create New Smove</button>
      {showModal && <InfoModal showModal={showModal} setShowModal={setShowModal} />}
      <figure>
        <img id="oldhouse" src={img1} alt="icon of old home" />
        {!!currentSmove && <figcaption>{currentSmove.oldAddress}</figcaption>}
      </figure>
      <span id="arrow">&#62;</span>
      <figure>
        <img id="newhouse" src={img2} alt="icon of new home" />
        {!!currentSmove && <figcaption>{currentSmove.newAddress}</figcaption>}
      </figure>
      <div>
        <label>
          Add team member's email to Smove:
          <input type="text" name="add" onChange={handleChange}/>
        </label>
        <button id="addteam" onClick={handleClick}>
          ADD
        </button>
      </div>
      <SmoveTable />
    </div>
  )
}

export default Profile;