import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Station from './pages/stations.jsx';
import Navbar from './pages/Navbar.jsx';
import Schedule from './pages/schedule.jsx';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stations" element={<Station/>} />
        <Route path="/schedules" element={<Schedule/>} />
        </Routes>
    </Router>
  );
}

export default App;
