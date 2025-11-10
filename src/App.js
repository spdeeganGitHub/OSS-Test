import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admissions from './pages/Admissions';
import Enrollment from './pages/Enrollment';
import Alumni from './pages/Alumni';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <nav style={{ backgroundColor: '#13294B', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
          <Link to="/admissions" style={{ color: 'white', marginRight: '1rem' }}>Admissions</Link>
          <Link to="/enrollment" style={{ color: 'white', marginRight: '1rem' }}>Enrollment</Link>
          <Link to="/alumni" style={{ color: 'white', marginRight: '1rem' }}>Alumni</Link>
          {loggedIn && <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>}
        </div>
        <div>
          {!loggedIn ? (
            <Link to="/login" style={{ color: 'white' }}>Login</Link>
          ) : (
            <button onClick={() => setLoggedIn(false)} style={{ backgroundColor: '#4B9CD3', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>Logout</button>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
