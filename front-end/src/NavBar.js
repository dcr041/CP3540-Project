import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => (
    <nav>
        <Row className="text-center">
            <Col>
                <button varient="dark">
                    <Link to="/">Home</Link>
                </button>
            </Col>
            <Col>
                <h2>Knowledgehook</h2>
            </Col>
            <Col>
                <button className="btn btn-light ">
                    <Link to="/Statistics">Statistics</Link>
                </button>
            </Col>  
        </Row>
        <hr className="text-dark"></hr>
    </nav>
);

export default NavBar;