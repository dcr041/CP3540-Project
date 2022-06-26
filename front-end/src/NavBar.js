import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {faChartSimple, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
    <>
        <Row className="bg-dark">
            <Col className="text-start bg-dark text-white ms-1 mt-2">
                <button className="btn">
                    <Link to="/"><FontAwesomeIcon icon={faHome} size="2x"  /></Link>
                </button>
            </Col>  
            <Col className="text-center bg-dark text-white">
                <h2 className=" fw-bold fs-1 ms-3 mt-2">Quizarama</h2>
            </Col>
            <Col className="text-end bg-dark text-white me-1 mt-2">
                <button className="btn">
                    <Link to="/Statistics"><FontAwesomeIcon icon={faChartSimple} size="2x"  /></Link>
                </button>
            </Col>  
            <hr className="text-white"></hr>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </>
    
);

export default NavBar;