// Header.jsx

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 flex justify-between items-center shadow-xl">
      <h1 className="text-4xl font-extrabold text-white cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out">
        <Link to="/">Navipath</Link>
      </h1>

      <div className="space-x-6">
        <Link to="/profile" className="text-white font-semibold hover:text-purple-200 transition duration-300">
          Profile
        </Link>
        <Link to="/settings" className="text-white font-semibold hover:text-purple-200 transition duration-300">
          Settings
        </Link>
      </div>
    </header>
  );
}

export default Header;


