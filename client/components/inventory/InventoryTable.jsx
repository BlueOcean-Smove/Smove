import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';


const InventoryTable = () => {
    const exampleArr = [{
        boxNum: 1,
        originRoom: 'Kitchen',
        destinationRoom: 'Bathroom',
        boxPriority: 'Yellow',
        notes: 'Shampoo bottles'
    }]

    return (
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
                {exampleArr.map((obj, index) => (
                    <tr key={index}>
                        <td>{obj.boxNum}</td>
                        <td>{obj.originRoom}</td>
                        <td>{obj.destinationRoom}</td>
                        <td>{obj.boxPriority}</td>
                        <td>{obj.notes}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default InventoryTable;