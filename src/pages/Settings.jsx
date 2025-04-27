// Settings.jsx

import React from "react";

function Settings() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white min-h-screen p-8">
      <h2 className="text-4xl font-semibold mb-8">Settings</h2>

      {/* Track Your Courses Section */}
      <div className="bg-white p-6 rounded-xl shadow-xl mb-8 transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-100">
        <h3 className="text-xl font-semibold text-gray-800">Track Your Courses</h3>
        <input
          type="text"
          placeholder="Add course..."
          className="mt-4 w-full p-3 bg-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600"
        />
        <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:scale-105 transform transition duration-300">
          Add Course
        </button>
      </div>

      {/* Notifications Section */}
      <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-100">
        <h3 className="text-xl font-semibold text-gray-800">Notifications</h3>
        <label className="flex items-center mt-4">
          <input type="checkbox" className="form-checkbox text-purple-600" />
          <span className="ml-2 text-gray-700">Enable Notifications</span>
        </label>
      </div>
    </div>
  );
}

export default Settings;



