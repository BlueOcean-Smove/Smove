import React, { useState, useContext } from 'react';
import CreateInventory from './CreateInventory.jsx';
import InventoryTable from './InventoryTable.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inventory = () => {
    return (
        <div id="inventory">
            <CreateInventory />
            <InventoryTable />
        </div>
    )
}

export default Inventory;