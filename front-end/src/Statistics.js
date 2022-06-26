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
                <Row>
                    <Col className='text-center'>
                        <Col className="fw-bold">Sports</Col>
                        <Col className="fw-normal">Total Score</Col>
                        <Col className="fw-light">
                            {user.sports.right}/{user.sports.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Board Games</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className='fw-light'>
                            {user.boardGames.right}/{user.boardGames.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Video Games</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.videoGames.right}/{user.videoGames.wrong}
                        </Col>
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
                <Row>
                    <Col className='text-center'>
                        <Col className="fw-bold">Music</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.music.right}/{user.music.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Celebrities</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.celebrities.right}/{user.celebrities.wrong}
                        </Col>
                    </Col>
                    
                    <Col className='text-center'>
                        <Col className="fw-bold">Art</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.art.right}/{user.art.wrong}
                        </Col>
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
                <Row>
                    <Col className='text-center'>
                        <Col className="fw-bold">Science & Nature</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.scienceNature.right}/{user.scienceNature.wrong}
                        </Col>
                    </Col>

                    <Col className='text-center'>
                        <Col className="fw-bold">Geography</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.geography.right}/{user.geography.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Animals</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.animals.right}/{user.animals.wrong}
                        </Col>
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
                <Row>
                    <Col className='text-center'>
                        <Col className="fw-bold">Vehicles</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.vehicles.right}/{user.vehicles.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Mathematics</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.mathematics.right}/{user.mathematics.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Gadgets & Computers</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.gadgetsComputers.right}/{user.gadgetsComputers.wrong}
                        </Col>
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
                <Row>
                    <Col className='text-center'>
                        <Col className="text-center fw-bold">Politics</Col>
                        <Col className="text-start fw-bold">Total Score:</Col>
                        <Col className="text-end">
                            {user.politics.right}/{user.politics.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="text-center fw-bold">History & Mythology</Col>
                        <Col className="text-start fw-bold">Total Score:</Col>
                        <Col className="text-end">
                            {user.historyMythology.right}/{user.historyMythology.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="text-center fw-bold">General Knowledge</Col>
                        <Col className="text-start fw-bold">Total Score:</Col>
                        <Col className="text-end">
                            {user.generalKnowledge.right}/{user.generalKnowledge.wrong}
                        </Col>
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
                <Row>
                    <Col className='text-center'>
                        <Col className="fw-bold">Film</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.film.right}/{user.film.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Cartoons & Animation</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.cartoonsAnimation.right}/{user.cartoonsAnimation.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Television</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.television.right}/{user.television.wrong}
                        </Col>
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
                <Row>
                    <Col className='text-center'>
                        <Col className="fw-bold">Comics</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.comics.right}/{user.comics.wrong}
                        </Col>
                    </Col>
                
                    <Col className='text-center'>
                        <Col className="fw-bold">Books</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.books.right}/{user.books.wrong}
                        </Col>
                    </Col>
               
                    <Col className='text-center'>
                        <Col className="fw-bold">Anime & Manga</Col>
                        <Col className="fw-normal">Total Score:</Col>
                        <Col className="fw-light">
                            {user.animeManga.right}/{user.animeManga.wrong}
                        </Col>
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </>
    );
}
