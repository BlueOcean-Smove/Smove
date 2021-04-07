import React, { useContext } from 'react';
import { UserDataContext } from '../Data.jsx';

const SmoveTable = ( sm) => {
  const { userData, setUserData } = useContext(UserDataContext);

  return (
    <div>
      {userData.smoves.map((smove, index) => (
        <div className="smoverow" key={index}>
          <span className="smovename">{smove.oldAddress}</span>
          <span className="smoveteam">{smove.moveTeam}</span>
        </div>
      ))}
    </div>
  )
}

export default SmoveTable;