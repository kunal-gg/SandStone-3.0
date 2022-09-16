import './App.css';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import Introduction from './components/Introduction';
import Theme from './components/Themes';

import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpeakersPage from './pages/SpeakersPage';
import CoreTeamPage from './pages/CoreTeamPage';
import EventsPage from './pages/EventsPage';
import ThemePage from './pages/ThemePage';
import SponsorsPage from './pages/SponsorsPage';
import HackthonPage from './pages/HackathonPage';


function App() {
  return (
    <div className="App">
      


      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/speakers' element={<SpeakersPage />} />
          <Route path='/sponsors' element={<SponsorsPage />} />
          <Route path='/theme' element={<ThemePage />} />
          <Route path='/team' element={<CoreTeamPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/hackathon' element={<HackthonPage />} />

        </Routes>
        <Footer />
        <Copyright />
  

        {/* <HomePage />
        <Introduction />
        <Theme />
        <Footer />
        <Copyright /> */}

      </Router>
      
    </div>
  );
}

export default App;
