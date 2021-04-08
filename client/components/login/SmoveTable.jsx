import React, { useContext, useState } from 'react';
import { UserDataContext } from '../Data.jsx';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const SmoveTableWrapper = styled.div`
  margin-left: 100px;
  width: 80%;
  border-bottom: 25px;
`
const SmoveHelpText = styled.p`
  margin-left: 100px;
`
const SmoveTitleCell = styled.td`
  cursor: pointer;
  :hover{
    color: blue;
  }
`
const SmoveFriendsCell = styled.p`
  margin-bottom: 0;
  margin-block-end: 0;
`
const SmoveTable = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  const handleMakeCurrent = (newSmove) => {
    userData.smoves.forEach((smove) => {
      if (smove._id === newSmove._id) {
        smove.isCurrentSmove = true;
      } else {
        smove.isCurrentSmove = false;
      }
    })
    axios.patch(`/user/${userData.email}`, {data: userData.smoves})
      .then(({ data }) => {
        console.log('new smove added: ', data);
        setUserData(data);
      })
      .catch((err) => console.log('error in patch request to create new smove: ', err))
  }

  return (
    <>
      {userData && userData.smoves.length !== 0 && (
        <>
          <SmoveHelpText>Click on a Smove below to update your current Smove</SmoveHelpText>
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
                  <SmoveTitleCell width='45%' onClick={() => handleMakeCurrent(smove)}>{smove.smoveName}</SmoveTitleCell>
                  {smove.moveTeam && smove.moveTeam.length !== 0 ? (
                    <td>{smove.moveTeam.map((teamMember, index) => (
                      <SmoveFriendsCell>{teamMember}
                      </SmoveFriendsCell>
                    ))}</td>
                  ) : (
                    <td>There are no team members currently on this Smove</td>
                  )}
                </tr>
              ))}
              </tbody>
            </Table>
          </SmoveTableWrapper>
        </>
      )}
    </>
  )
}

export default SmoveTable;
