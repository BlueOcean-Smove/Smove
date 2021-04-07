import React, { useContext } from 'react';
import { UserDataContext } from '../Data.jsx';
import styled from 'styled-components';

const SmoveTableWrapper = styled.div`
  margin-left: 100px;
`
const SmoveTable = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  return (
    <>
      {userData.smoves.length !== 0 && (
        <SmoveTableWrapper>
          {userData.smoves.map((smove, index) => (
            <div className="smoverow" key={index}>
              <span className="smovename">{smove.smoveName}</span>
              <span className="smoveteam">{smove.moveTeam}</span>
            </div>
          ))}
        </SmoveTableWrapper>
      )}
    </>
  )
}

export default SmoveTable;