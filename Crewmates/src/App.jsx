// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CrewmateDetail from './pages/CrewmateDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
