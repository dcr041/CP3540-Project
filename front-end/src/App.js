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
import questionsAnimals from './data/animals.json';
import questionsGeography from './data/geography.json';
import questionsSports from './data/sports.json';

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
      <Container>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact />
            <Route path="/FormPage" />
          </Routes>
        </Router>
          <Row className="my-5">
              <Col className="text-center">
                  <h1 onClick={() => setCategory(null)}>Knowledgehook</h1>
              </Col>
          </Row>
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
      </Container>

  );
}

export default App;
