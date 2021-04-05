import React from 'react';
import CreateInventory from './CreateInventory.jsx';
import InventoryTable from './InventoryTable.jsx';


const Inventory = () => {
    //put any API requests here (if possible)
    return (
        <div id="inventory">
            <CreateInventory />
            <InventoryTable />
        </div>
    )
}

export default Inventory;