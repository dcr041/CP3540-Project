import { useState} from 'react';
import React from "react";
import CATEGORIES from './categories';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export function Statistics() {
    const [hours, setHours]= useState(0);
    const [min, setMin]= useState(0);
    const [sec, setSecond]= useState(0);
    const user = JSON.parse(localStorage.getItem('user'));
    const checkDate = new Date();

    if (user.date === new Date().getDay()){
        setInterval(function time(){
            var d = new Date();
            var hours = 24 - d.getHours()-1;
            var min = 60 - d.getMinutes();
            if((min + '').length === 1){
                min = '0' + min;
            }
            var sec = 60 - d.getSeconds();
            if((sec + '').length === 1){
                    sec = '0' + sec;
            }
            setHours(hours)
            setMin(min)
            setSecond(sec)
            if (min === 0 && sec <= 10){
                console.log("In here")
            } 
            }, 1000);
    }
    console.log(user);
    return (
        <Container className='border border-secondary border-5 text-white bg-dark w-50 rounded' >

            {/* todays stuff */}
            <Row>
                <Col className="ms-5 mt-3">
                    <p className='text-center fw-bold'>
                        Today's Score 
                    </p>
                    <p className='text-center'>
                        {user.todayScore}/5
                    </p>
                </Col>
                <Col className='text-center fs-2 fw-bold'>Statistics</Col>
                <Col className="text-end me-5 mt-3">
                    <p className='text-center fw-bold'>
                        Next Question
                    </p>
                    <p className='text-center'>
                        {hours}:{min}:{sec}
                    </p>
                </Col>
            </Row>
            <hr className='text-white'></hr>
            <Row>
                <Col className='text-center'>
                    <p className='fw-bold'>Played: </p>{user.gamesPlayed}</Col>
                <Col className='text-center'>Right: {user.questionsRight}</Col>
                <Col className='text-center'>Wrong: {user.questionsWrong}</Col>
            </Row>
            <hr className='text-white'></hr>
            
            { checkDate.getDay() === 0 ?
             (
            <>
            <Row>
                <Row className="text-center">Animals</Row>
                <Row>
                    <Col className="text-start">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.animals.right}/{user.animals.wrong}
                    </Col>
                </Row>
            </Row>
            <Row>
                <Row className="text-center">Geography</Row>
                <Row>
                    <Col className="text-start">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.geography.right}/{user.geography.wrong}
                    </Col>
                </Row>
            </Row>
            <Row>
                <Row className="text-center">Sports</Row>
                <Row>
                    <Col className="text-start">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.sports.right}/{user.sports.wrong}
                    </Col>
                </Row>
            </Row>
            </>
             
             ) : null}
                
                
            
            
            
        </Container>
    );
}
