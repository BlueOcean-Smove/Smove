import React, {useState} from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditInventory from './EditInventory.jsx';


const InventoryTableRow = ({ box, rerenderData, deleteBox }) => {
    const [show, setShow] = useState(false);


    //closes the edit task modal
    const handleClose = () => setShow(false);

    //opens the edit task modal
    const handleShow = () => setShow(true);

    return (
        <>
        <tr data-testid="inventoryRow">
          <td>
            {box.boxNum}
          </td>
          <td>
            {box.originRoom}
          </td>
          <td>
            {box.destinationRoom}
          </td>
          <td>
            {box.boxPriority}
          </td>
          <td>
            {box.notes}
          </td>
          <td>
            <FaEdit onClick={handleShow}/>
            <FaTrashAlt onClick={() => deleteBox(box.boxNum)}/>
            <EditInventory
                box={box}
                handleClose={handleClose}
                show={show}
            />            
          </td>
        </tr>
      </>    
    )
}

export default InventoryTableRow;