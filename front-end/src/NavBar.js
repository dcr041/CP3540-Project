import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => (
    <nav className="bg-dark text-white">
        <Row className="text-center">
            <Col className="text-start">
                <h2 className=" fw-bold fs-1 ms-5 mt-2">Knowledgehook</h2>
            </Col>
            <Col className="text-end">
                <button className="btn btn-dark mt-3 mr-5">
                    <Link to="/Statistics">Statistics</Link>
                </button>
            </Col>  
        </Row>
        <hr className="text-dark"></hr>
    </nav>
);

export default NavBar;