import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import CATEGORIES from './categories';
import Category from './Category';
import GameView from './GameView';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Navigate } from 'react-router-dom';

function Start() {
  const user = JSON.parse(localStorage.getItem('user')); 
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [sportsQuestions, setSportsQuestions] = useState([]);
  const [boardGamesQuestions, setBoardGamesQuestions] = useState([]);
  const [videoGamesQuestions, setVideoGamesQuestions] = useState([]);
  const [musicQuestions, setMusicQuestions] = useState([]);
  const [celebritiesQuestions, setCelebritiesQuestions] = useState([]);
  const [artQuestions, setArtQuestions] = useState([]);
  const [scienceNatureQuestions, setScienceNatureQuestions] = useState([]);
  const [geographyQuestions, setGeographyQuestions] = useState([]);
  const [animalsQuestions, setAnimalsQuestions] = useState([]);
  const [vehiclesQuestions, setVehiclesQuestions] = useState([]);
  const [mathematicsQuestions, setMathematicsQuestions] = useState([]);
  const [gadgetsComputersQuestions, setGadgetsComputersQuestions] = useState([]);
  const [politicsQuestions, setPoliticsQuestions] = useState([]);
  const [historyMythologyQuestions, setHistoryMythologyQuestions] = useState([]);
  const [generalKnowledgeQuestions, setGeneralKnowledgeQuestions] = useState([]);
  const [filmQuestions, setFilmQuestions] = useState([]);
  const [cartoonsAnimationQuestions, setCartoonsAnimationQuestions] = useState([]);
  const [televisionQuestions, setTelevisionQuestions] = useState([]);
  const [comicsQuestions, setComicsQuestions] = useState([]);
  const [booksQuestions, setBooksQuestions] = useState([]);
  const [animeMangaQuestions, setAnimeMangaQuestions] = useState([]);
  if (user.date !== new Date().getDay()) {
    user.todayScore = 0;
    // user.todayCategory = "";
    localStorage.setItem("user", JSON.stringify(user));
  }
    
    useEffect(() => {
        fetch('/api/sports')
        .then((response) => response.json())
        .then(setSportsQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/boardGames')
        .then((response) => response.json())
        .then(setBoardGamesQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/videoGames')
        .then((response) => response.json())
        .then(setVideoGamesQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/music')
        .then((response) => response.json())
        .then(setMusicQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/celebrities')
        .then((response) => response.json())
        .then(setCelebritiesQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/art')
        .then((response) => response.json())
        .then(setArtQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/scienceNature')
        .then((response) => response.json())
        .then(setScienceNatureQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/geography')
        .then((response) => response.json())
        .then(setGeographyQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/animals')
        .then((response) => response.json())
        .then(setAnimalsQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/vehicles')
        .then((response) => response.json())
        .then(setVehiclesQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/mathematics')
        .then((response) => response.json())
        .then(setMathematicsQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/gadgetsComputers')
        .then((response) => response.json())
        .then(setGadgetsComputersQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/politics')
        .then((response) => response.json())
        .then(setPoliticsQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/historyMythology')
        .then((response) => response.json())
        .then(setHistoryMythologyQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/generalKnowledge')
        .then((response) => response.json())
        .then(setGeneralKnowledgeQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/film')
        .then((response) => response.json())
        .then(setFilmQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/cartoonsAnimation')
        .then((response) => response.json())
        .then(setCartoonsAnimationQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/television')
        .then((response) => response.json())
        .then(setTelevisionQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/comics')
        .then((response) => response.json())
        .then(setComicsQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/books')
        .then((response) => response.json())
        .then(setBooksQuestions)
    }, []);

    useEffect(() => {
        fetch('/api/animeManga')
        .then((response) => response.json())
        .then(setAnimeMangaQuestions)
    }, []);


  const setCurrentCategory = category => {

    setCategory(category);
    switch (category.name) {
        case CATEGORIES.sports.name:
            user.todayCategory = "Sports";
            localStorage.setItem("user", JSON.stringify(user));
            setSportsQuestions(sportsQuestions);
            shuffle(sportsQuestions);
            setQuestions(sportsQuestions);
            break;
        case CATEGORIES.boardGames.name:
            user.todayCategory = "Board Games";
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);
            setBoardGamesQuestions(boardGamesQuestions);
            shuffle(boardGamesQuestions);
            setQuestions(boardGamesQuestions);
            break;
        case CATEGORIES.videoGames.name:
            user.todayCategory = "Video Games";
            localStorage.setItem("user", JSON.stringify(user));
            setVideoGamesQuestions(videoGamesQuestions);
            shuffle(videoGamesQuestions);
            setQuestions(videoGamesQuestions);
            break;
        case CATEGORIES.music.name:
            user.todayCategory = "Music, Musicals & Theatre";
            localStorage.setItem("user", JSON.stringify(user));
            setMusicQuestions(musicQuestions);
            shuffle(musicQuestions);
            setQuestions(musicQuestions);
            break;
        case CATEGORIES.celebrities.name:
            user.todayCategory = "Celebrities";
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);
            setCelebritiesQuestions(celebritiesQuestions);
            shuffle(celebritiesQuestions);
            setQuestions(celebritiesQuestions);
            break;
        case CATEGORIES.art.name:
            user.todayCategory = "Art";
            localStorage.setItem("user", JSON.stringify(user));
            setArtQuestions(artQuestions);
            shuffle(artQuestions);
            setQuestions(artQuestions);
            break;
        case CATEGORIES.scienceNature.name:
            user.todayCategory = "Science & Nature";
            localStorage.setItem("user", JSON.stringify(user));
            setScienceNatureQuestions(scienceNatureQuestions);
            shuffle(scienceNatureQuestions);
            setQuestions(scienceNatureQuestions);
            break;
        case CATEGORIES.geography.name:
            user.todayCategory = "Geography";
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);
            setGeographyQuestions(geographyQuestions);
            shuffle(geographyQuestions);
            setQuestions(geographyQuestions);
            break;
        case CATEGORIES.animals.name:
            user.todayCategory = "Animals";
            localStorage.setItem("user", JSON.stringify(user));
            setAnimalsQuestions(animalsQuestions);
            shuffle(animalsQuestions);
            setQuestions(animalsQuestions);
            break;
        case CATEGORIES.vehicles.name:
            user.todayCategory = "Vehicles";
            localStorage.setItem("user", JSON.stringify(user));
            setVehiclesQuestions(vehiclesQuestions);
            shuffle(vehiclesQuestions);
            setQuestions(vehiclesQuestions);
            break;
        case CATEGORIES.mathematics.name:
            user.todayCategory = "Mathematics";
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);
            setMathematicsQuestions(mathematicsQuestions);
            shuffle(mathematicsQuestions);
            setQuestions(mathematicsQuestions);
            break;
        case CATEGORIES.gadgetsComputers.name:
            user.todayCategory = "Gadgets & Computers";
            localStorage.setItem("user", JSON.stringify(user));
            setGadgetsComputersQuestions(gadgetsComputersQuestions);
            shuffle(gadgetsComputersQuestions);
            setQuestions(gadgetsComputersQuestions);
            break;
        case CATEGORIES.politics.name:
            user.todayCategory = "Politics";
            localStorage.setItem("user", JSON.stringify(user));
            setPoliticsQuestions(politicsQuestions);
            shuffle(politicsQuestions);
            setQuestions(politicsQuestions);
            break;
        case CATEGORIES.historyMythology.name:
            user.todayCategory = "History & Mythology";
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);
            setHistoryMythologyQuestions(historyMythologyQuestions);
            shuffle(historyMythologyQuestions);
            setQuestions(historyMythologyQuestions);
            break;
        case CATEGORIES.generalKnowledge.name:
            user.todayCategory = "General Knowledge";
            localStorage.setItem("user", JSON.stringify(user));
            setGeneralKnowledgeQuestions(generalKnowledgeQuestions);
            shuffle(generalKnowledgeQuestions);
            setQuestions(generalKnowledgeQuestions);
            break;
            case CATEGORIES.film.name:
            user.todayCategory = "Film";
            localStorage.setItem("user", JSON.stringify(user));
            setFilmQuestions(filmQuestions);
            shuffle(filmQuestions);
            setQuestions(filmQuestions);
            break;
        case CATEGORIES.cartoonsAnimation.name:
            user.todayCategory = "Cartoons & Animation";
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);
            setCartoonsAnimationQuestions(cartoonsAnimationQuestions);
            shuffle(cartoonsAnimationQuestions);
            setQuestions(cartoonsAnimationQuestions);
            break;
        case CATEGORIES.television.name:
            user.todayCategory = "Television";
            localStorage.setItem("user", JSON.stringify(user));
            setTelevisionQuestions(televisionQuestions);
            shuffle(televisionQuestions);
            setQuestions(televisionQuestions);
            break;
            case CATEGORIES.comics.name:
            user.todayCategory = "Comics";
            localStorage.setItem("user", JSON.stringify(user));
            setComicsQuestions(comicsQuestions);
            shuffle(comicsQuestions);
            setQuestions(comicsQuestions);
            break;
        case CATEGORIES.books.name:
            user.todayCategory = "Books";
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user);
            setBooksQuestions(booksQuestions);
            shuffle(booksQuestions);
            setQuestions(booksQuestions);
            break;
        case CATEGORIES.animeManga.name:
            user.todayCategory = "Anime & Manga";
            localStorage.setItem("user", JSON.stringify(user));
            setAnimeMangaQuestions(animeMangaQuestions);
            shuffle(animeMangaQuestions);
            setQuestions(animeMangaQuestions);
            break;
    }  
  };
  
  return (
    <>
        { user.date === new Date().getDay() ? (<Navigate push to="/Statistics"/>) : null}
        <Container fluid>
        
        <br></br>
        <br></br>
        
         <>
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
            </>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
  );
  
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



export default Start;