import { BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Statistics} from './Statistics';
import Start from './start';
import {CheckNewUser} from './checkNewUser';


function App() { 
  // localStorage.clear();
  CheckNewUser();
 
  return (
    <main id="page-container">
        <Router >
        <NavBar />
            <Routes>
                <Route path="/" element={<Start />} exact />
                <Route path="/Statistics" element={<Statistics />} />
            </Routes>
        </Router>
      <Footer /> 
    </main>
  );
}

export default App;
