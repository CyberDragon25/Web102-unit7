// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CrewmateList from './pages/CrewmateList';
import CrewmateDetails from '/src/pages/CrewmateDetail.jsx';
import EditCrewmateForm from './pages/EditCrewmateForm'; 

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/crewmates">View Crewmates</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crewmates" element={<CrewmateList />} />
        <Route path="/crewmates/:id" element={<CrewmateDetails />} />
        <Route path="/crewmates/:id/edit" element={<EditCrewmateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
