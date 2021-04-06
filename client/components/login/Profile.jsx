import React, { useState } from 'react';
import axios from 'axios';
import InfoModal from './Modal';

const Profile = ({ smovesArr }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentSmove, setCurrentSmove] = useState(null);
  const [otherSmoves, setOtherSmoves] = useState([]);

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

  return (
    <div>
      <button id="newsmove" onClick={() => setShowModal(true)}>Create New Smove</button>
      {showModal && <InfoModal showModal={showModal} setShowModal={setShowModal} />}
      <figure>
        <img id="oldhouse" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MXwxM[…]0by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80" alt="icon of old home" />
        {!!currentSmove && <figcaption>{currentSmove.oldAddress}</figcaption>}
      </figure>
      <span id="arrow">&#62;</span>
      <figure>
        <img id="newhouse" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*" alt="icon of new home" />
        {!!currentSmove && <figcaption>{currentSmove.newAddress}</figcaption>}
      </figure>
    </div>
  )
}

export default Profile;