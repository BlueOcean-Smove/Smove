import React, { useState, useContext } from 'react';
import CreateInventory from './CreateInventory.jsx';
import InventoryTable from './InventoryTable.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Inventory = () => {
    return (
        <div id="inventory" >
            <Container>
                <br></br>
                <Row style={{justifyContent: 'center'}}>
                    <h2>Inventory</h2>  
                </Row>
                <Row style={{justifyContent: 'center'}}>
                    <CreateInventory/>
                </Row> 
                <br></br>
                <Row>
                    <InventoryTable />
                </Row>
            </Container>
        </div>
    )
}

export default Inventory;