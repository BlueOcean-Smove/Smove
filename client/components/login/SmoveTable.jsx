import React, { useContext, useState } from 'react';
import { UserDataContext } from '../Data.jsx';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

const SmoveTableWrapper = styled.div`
  margin-left: 100px;
  width: 60%;
  border-bottom: 25px;
`
const SmoveTable = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [currentSmove, setCurrentSmove] = useState(null);

  const handleMakeCurrent = (smove) => {
    console.log(smove);
  }

  return (
    <>
      {userData && userData.smoves.length !== 0 && (
        <SmoveTableWrapper>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th width='45%' class='text-center'>Smoves</th>
                <th class='text-center'>Team Members</th>
              </tr>
            </thead>
            <tbody>
            {userData.smoves.map((smove, index) => (
              <tr key={index}>
                <td width='45%' onClick={() => handleMakeCurrent(smove)}>{smove.smoveName}</td>
                {smove.moveTeam && smove.moveTeam.length !== 0 ? (
                  <td>{smove.moveTeam.map((teamMember, index) => (
                    <p>&bull; {teamMember}
                      <br></br>
                    </p>
                  ))}</td>
                ) : (
                  <td>There are no team members currently on this Smove</td>
                )}
              </tr>
            ))}
            </tbody>
          </Table>
        </SmoveTableWrapper>
      )}
    </>
  )
}

export default SmoveTable;
