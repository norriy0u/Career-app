import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-full p-6">
      <h1 className="text-2xl font-bold text-white mb-8">Navipath</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="text-lg text-gray-400 hover:text-purple-400">Dashboard</Link>
        </li>
        <li>
          <Link to="/job-opportunities" className="text-lg text-gray-400 hover:text-purple-400">Job Opportunities</Link>
        </li>
        <li>
          <Link to="/career-goals" className="text-lg text-gray-400 hover:text-purple-400">Career Goals</Link>
        </li>
        <li>
          <Link to="/profile" className="text-lg text-gray-400 hover:text-purple-400">Profile</Link>
        </li>
        <li>
          <Link to="/settings" className="text-lg text-gray-400 hover:text-purple-400">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
