import { useState} from 'react';
import React from "react";
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
    return (
        <>
        <Container className='border border-secondary border-5 text-white bg-dark rounded flex' >
            {/* Todays Scores/General Scoring/Timer */}
            <Col className='text-center fs-2 fw-bold'>Statistics</Col>
            <Row>
                <Col className="ms-5 mt-3">
                    <p className='text-center fw-bold'>
                        Today's Score 
                    </p>
                    <p className='text-center'>
                        {user.todayScore}/5
                    </p>
                </Col>
                
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
                <Col className='text-center'>{user.gamesPlayed}
                    <p className='fw-bold'>Played</p>
                </Col>
                <Col className='text-center'>{Math.round((user.questionsRight/user.questionsWrong) * 100)} 
                    <p className='fw-bold'>Right %</p>
                </Col>
                <Col className='text-center'>{user.questionsRight}
                    <p className='fw-bold'>Correct</p>
                </Col>
                <Col className='text-center'>{user.questionsWrong}
                    <p className='fw-bold'>Incorrect</p>
                </Col>
                
            </Row>
            <hr className='text-white'></hr>
            
            {/* Sunday Scoring */}
            { checkDate.getDay() === 0 ?
             (
            <>
            <Container>
                <Col className="text-center fw-bold">Animals</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.animals.right}/{user.animals.wrong}
                    </Col>
                </Row>

                <Col className="text-center fw-bold">Geography</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.geography.right}/{user.geography.wrong}
                    </Col>
                </Row>
                
                <Col className="text-center fw-bold">Sports</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.sports.right}/{user.sports.wrong}
                    </Col>
                </Row>
            </Container>
            </>
             
             ) : null}

            {/* Monday Scoring */}
            { checkDate.getDay() === 1 ?
             (
            <>
            <Container>
                <Col className="text-center fw-bold">Animals</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.animals.right}/{user.animals.wrong}
                    </Col>
                </Row>

                <Col className="text-center fw-bold">Geography</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.geography.right}/{user.geography.wrong}
                    </Col>
                </Row>
                
                <Col className="text-center fw-bold">Sports</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.sports.right}/{user.sports.wrong}
                    </Col>
                </Row>
            </Container>
            </>
             
             ) : null}

            {/* Tuesday Scoring */}
            { checkDate.getDay() === 2 ?
             (
            <>
            <Container>
                <Col className="text-center fw-bold">Animals</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.animals.right}/{user.animals.wrong}
                    </Col>
                </Row>

                <Col className="text-center fw-bold">Geography</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.geography.right}/{user.geography.wrong}
                    </Col>
                </Row>
                
                <Col className="text-center fw-bold">Sports</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.sports.right}/{user.sports.wrong}
                    </Col>
                </Row>
            </Container>
            </>
             
             ) : null}        

            {/* Wednesday Scoring */}
            { checkDate.getDay() === 3 ?
             (
            <>
            <Container>
                <Col className="text-center fw-bold">Animals</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.animals.right}/{user.animals.wrong}
                    </Col>
                </Row>

                <Col className="text-center fw-bold">Geography</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.geography.right}/{user.geography.wrong}
                    </Col>
                </Row>
                
                <Col className="text-center fw-bold">Sports</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.sports.right}/{user.sports.wrong}
                    </Col>
                </Row>
            </Container>
            </>
             
             ) : null}

            {/* Thursday Scoring */}
            { checkDate.getDay() === 4 ?
             (
            <>
            <Container>
                <Col className="text-center fw-bold">Animals</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.animals.right}/{user.animals.wrong}
                    </Col>
                </Row>

                <Col className="text-center fw-bold">Geography</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.geography.right}/{user.geography.wrong}
                    </Col>
                </Row>
                
                <Col className="text-center fw-bold">Sports</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.sports.right}/{user.sports.wrong}
                    </Col>
                </Row>
            </Container>
            </>
             
             ) : null}

            {/* Friday Scoring */}
            { checkDate.getDay() === 5 ?
             (
            <>
            <Container>
                <Col className="text-center fw-bold">Animals</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.animals.right}/{user.animals.wrong}
                    </Col>
                </Row>

                <Col className="text-center fw-bold">Geography</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.geography.right}/{user.geography.wrong}
                    </Col>
                </Row>
                
                <Col className="text-center fw-bold">Sports</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.sports.right}/{user.sports.wrong}
                    </Col>
                </Row>
            </Container>
            </>
             
             ) : null}


            {/* Saturday Scoring */}
            { checkDate.getDay() === 6 ?
             (
            <>
            <Container>
                <Col className="text-center fw-bold">Animals</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.animals.right}/{user.animals.wrong}
                    </Col>
                </Row>

                <Col className="text-center fw-bold">Geography</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.geography.right}/{user.geography.wrong}
                    </Col>
                </Row>

                <Col className="text-center fw-bold">Sports</Col>
                <Row>
                    <Col className="text-start fw-bold">
                        Total Score:
                    </Col>
                    <Col className="text-end">
                        {user.sports.right}/{user.sports.wrong}
                    </Col>
                </Row>
            </Container>
            </>
             
             ) : null}
        <br></br>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        </>
    );
}
