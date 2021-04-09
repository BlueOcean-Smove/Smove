import React, { useState, useContext } from 'react';
import CreateInventory from './CreateInventory.jsx';
import InventoryTable from './InventoryTable.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Inventory = () => {
    return (
        <div id="inventory">
            <Container>
                <br></br>
                <Row>
                    <h2>Inventory</h2>   
                    <CreateInventory inline/>
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