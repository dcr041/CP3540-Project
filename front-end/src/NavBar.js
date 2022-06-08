import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => (
    <nav>
        <Row>
            <Col className="text-center">
                <button varient="dark">
                    <Link to="/">Home</Link>
                </button>
                
                <button className="btn btn-light ">
                    <Link to="/Statistics">Statistics</Link>
                </button>
            </Col>
        </Row>
        <hr className="text-white"></hr>
    </nav>
);

export default NavBar;