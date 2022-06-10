import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
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
import questionsAnimals from './data/animals.json';
import questionsGeography from './data/geography.json';
import questionsSports from './data/sports.json';
import {Alert} from'react-bootstrap';


function App() {
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]);

  const setCurrentCategory = category => {
    setCategory(category);

    switch (category.name) {
        case CATEGORIES.animals.name:
            setQuestions(questionsAnimals);
            break;
        case CATEGORIES.geography.name:
            setQuestions(questionsGeography);
            break;
        case CATEGORIES.sports.name:
            setQuestions(questionsSports);
            break;
    }
  };

  return (
      <Container fluid>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact />
            <Route path="/FormPage" />
          </Routes>
        </Router>
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
        <Router> 
        <div style={{color:"white",height:"100px"}}>
          <Alert style={{color:"white",backgroundColor:"black", marginBottom:"-20px"}}>
            <Footer />
             </Alert>
            </div> 
            <Routes>
                <Route path="/" exact />
                <Route path="/FormPage" />
            </Routes>
            </Router> 
    
    </Container>
  );
  
}

export default App;
