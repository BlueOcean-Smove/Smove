import React, { useContext, useState } from 'react';
import { UserDataContext } from '../Data.jsx';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

const SmoveTableWrapper = styled.div`
  margin-left: 100px;
  width: 50%;
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
      {userData.smoves.length !== 0 && (
        <SmoveTableWrapper>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th width='25%' className='text-center'>Smoves</th>
                <th className='text-center'>Team Members</th>
              </tr>
            </thead>
            <tbody>
            {userData.smoves.map((smove, index) => (
              <tr key={index}>
                <td width='25%' onClick={() => handleMakeCurrent(smove)}>{smove.smoveName}</td>
                <td>{smove.moveTeam}</td>
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
