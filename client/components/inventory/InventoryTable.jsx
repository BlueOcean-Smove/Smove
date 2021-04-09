import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';
import InventoryTableRow from './InventoryTableRow.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


const InventoryTable = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  
  //Establish inventory information for current smove
  const currentSmoveFromDb = userData.smoves.filter(smove => smove.isCurrentSmove)[0];
  const inventoryFromDb = currentSmoveFromDb.inventory;

  //Delete box from the inventory list
  const deleteBox = (boxNum) => {
    for (let i = 0; i < userData.smoves.length; i++) {
      let currentSmove = userData.smoves[i];
      if (currentSmove.isCurrentSmove) {
        currentSmove.inventory = currentSmove.inventory.filter(singleBox => singleBox.boxNum !== boxNum)
        axios.patch(`/user/${userData.email}`, {data: userData.smoves})
          .then(({ data }) => {
            return data;
          })
          .then((data) => setUserData(data))
          .catch((err) => console.log('Error deleting a task', err));
      }
    }
  }

  return (
      <React.Fragment>
      <Table striped bordered hover>
          <thead>
              <tr>
                  <th>Box Number</th>
                  <th>Origin Room</th>
                  <th>Destination Room</th>
                  <th>Box Priority</th>
                  <th>Notes</th>
                  <th>Edit/Delete Box</th>
              </tr>
          </thead>
          <tbody>
              {inventoryFromDb ? inventoryFromDb.map((box, idx) => (
                  <InventoryTableRow 
                    key={box.boxNum + idx}
                    box={box}
                    deleteBox={deleteBox} 
                  />
              )) : null}
          </tbody>
      </Table>
      </React.Fragment>
  )
}

export default InventoryTable;