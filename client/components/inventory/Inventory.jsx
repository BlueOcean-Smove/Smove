import React, { useState, useContext } from 'react';
import CreateInventory from './CreateInventory.jsx';
import InventoryTable from './InventoryTable.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Inventory = () => {
    return (
        <div id="inventory">
            {/* <CreateInventory /> */}
            {/* <InventoryTable /> */}
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col>
                        <h2>Inventory</h2>   
                        <CreateInventory />
                        <InventoryTable />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Inventory;