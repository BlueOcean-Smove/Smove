import React, { useContext, useState } from 'react';
import { UserDataContext } from '../Data.jsx';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

// define the Smove table to show all smoves and team members
const SmoveTable = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  // changes the current smove based on user click
  const handleMakeCurrent = (newSmove) => {
    userData.smoves.forEach((smove) => {
      if (smove._id === newSmove._id) {
        smove.isCurrentSmove = true;
      } else {
        smove.isCurrentSmove = false;
      }
    })
    // updates the database with the current smove
    axios.patch(`/user/${userData.email}`, {data: userData.smoves})
      .then(({ data }) => {
        setUserData(data);
      })
      .catch((err) => console.log('error in patch request to create new smove: ', err))
  }

  // render the table
  return (
    <>
      <SmoveHelpText>Click on a Smove below to update your current Smove</SmoveHelpText>
      <SmoveTableWrapper>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th width='40%' className='text-center'>Smoves</th>
              <th className='text-center'>Team Members</th>
            </tr>
          </thead>
          <tbody>
          {userData.smoves.map((smove, index) => (
            <tr key={index}>
              <SmoveTitleCell width='40%' onClick={() => handleMakeCurrent(smove)}>{smove.smoveName}</SmoveTitleCell>
              {smove.moveTeam && smove.moveTeam.length !== 0 ? (
                <td>{smove.moveTeam.map((teamMember, innerIndex) => (
                  <SmoveFriendsCell key={innerIndex + index}>{teamMember}</SmoveFriendsCell>
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
  )
}

export default SmoveTable;

// add styled components
var SmoveTableWrapper = styled.div`
  margin-left: 100px;
  width: 80%;
  border-bottom: 25px;
`
var SmoveHelpText = styled.p`
  margin-left: 100px;
`
var SmoveTitleCell = styled.td`
  cursor: pointer;
  :hover{
    color: blue;
  }
`
var SmoveFriendsCell = styled.p`
  margin-bottom: 0;
  margin-block-end: 0;
`