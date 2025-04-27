import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';  // Import the Dashboard page
import Profile from './pages/Profile';  // Import the Profile page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />  {/* Dashboard route */}
        <Route path="/profile" element={<Profile />} />  {/* Profile route */}
      </Routes>
    </Router>
  );
}

export default App;









