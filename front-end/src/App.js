import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import CATEGORIES from './categories';
import Category from './Category';
import GameView from './GameView';
import NavBar from './NavBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from'react-bootstrap';


function App() {
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [animalsQuestions, setAnimalsQuestions] = useState([]);
  const [geographyQuestions, setGeographyQuestions] = useState([]);
  const [sportsQuestions, setSportsQuestions] = useState([]);

  useEffect(() => {
        fetch('/api/animals')
        .then((response) => response.json())
        .then(setAnimalsQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/geography')
        .then((response) => response.json())
        .then(setGeographyQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/sports')
        .then((response) => response.json())
        .then(setSportsQuestions)
    }, []);

  const setCurrentCategory = category => {
    setCategory(category);
    switch (category.name) {
        case CATEGORIES.animals.name:
            setAnimalsQuestions(animalsQuestions);
            shuffle(animalsQuestions);
            setQuestions(animalsQuestions);
            break;
        case CATEGORIES.geography.name:
            setGeographyQuestions(geographyQuestions);
            shuffle(geographyQuestions);
            setQuestions(geographyQuestions);
            break;
        case CATEGORIES.sports.name:
            setSportsQuestions(sportsQuestions);
            shuffle(sportsQuestions);
            setQuestions(sportsQuestions);
            break;
    }
  };

  return (
    <>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/FormPage" />
            </Routes>
        </Router>
        <Container fluid>
        
        <br></br>
        <br></br>

        {category ? (
            <>
                <Row className="d-flex justify-content-center mb-4">
                    <Col md={4} className="text-center">
                        <Category category={category} size="sm" onSelect={setCurrentCategory} />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col md={4} className="text-center">
                        <GameView questions={questions} />
                    </Col>
                </Row>
            </>
        ) : (
            <>
                {Object.values(CATEGORIES).map((c, i) => (
                    <Row key={i} className="d-flex justify-content-center mb-5">
                        <Col md={4}>
                            <Category category={c} onSelect={setCurrentCategory} />
                        </Col>
                    </Row>
                ))}
            </>
        )}
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    </Container>
    <Alert style={{color:"white",backgroundColor:"black", marginBottom:"-20px"}}>
        <Footer />
    </Alert>
    </>
  );
  
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default App;
