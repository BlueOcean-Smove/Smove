import React, { useState, useContext } from 'react';
import CreateInventory from './CreateInventory.jsx';
import InventoryTable from './InventoryTable.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserDataContext } from '../Data.jsx';



const Inventory = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  console.log('data import in inventory: ', userData);
  const [sortByOption, setSortByOption] = useState('Box Number');

    return (
        <div id="inventory">
            <Form.Group controlId="formPrioritySelect">
                <Form.Label>Box Priority Level</Form.Label>
                <Form.Control as="select" onChange={(event) => setSortByOption(event.target.value)}>
                    <option>Box Number</option>
                    <option>Origin Room</option>
                    <option>Destination Room</option>
                    <option>Priority Level</option>
                </Form.Control>
            </Form.Group>

            <CreateInventory />
            <InventoryTable />
        </div>
    )
}

export default Inventory;