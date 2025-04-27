import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import JobOpportunities from './pages/JobOpportunities';
import CareerGoals from './pages/CareerGoals';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Home from './pages/Home';
import SignUp from './pages/SignUp';  // Import the SignUp page

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 bg-gray-900 text-white">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <div className="p-6">
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/job-opportunities" element={<JobOpportunities />} />
              <Route path="/career-goals" element={<CareerGoals />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              {/* Sign Up Route */}
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;















