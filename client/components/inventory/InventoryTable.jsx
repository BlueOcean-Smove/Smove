import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';
import InventoryTableRow from './InventoryTableRow.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


const InventoryTable = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  //rerenders the data on the task list 
  const rerenderData = (data) => {
      setUserData(data);
  }

  const currentSmoveFromDb = userData.smoves.filter(smove => smove.isCurrentSmove)[0];
  console.log('current smove: ', currentSmoveFromDb);
  const inventoryFromDb = currentSmoveFromDb.inventory;
  console.log('current smove inventory: ', inventoryFromDb);




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
                </tr>
            </thead>
            <tbody>
                {inventoryFromDb ? inventoryFromDb.map((box, idx) => (
                    <InventoryTableRow />
                )) : null}
            </tbody>
        </Table>
        </React.Fragment>
    )
}

export default InventoryTable;