// Dashboard.jsx

import React from "react";

function Dashboard() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-xl shadow-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Jobs Applied Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-100">
          <h3 className="text-2xl font-bold text-gray-800">Total Jobs Applied</h3>
          <p className="text-xl text-gray-500">15</p>
        </div>

        {/* Skills Completed Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-100">
          <h3 className="text-2xl font-bold text-gray-800">Skills Completed</h3>
          <p className="text-xl text-gray-500">12</p>
        </div>

        {/* Career Progress Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-100">
          <h3 className="text-2xl font-bold text-gray-800">Career Progress</h3>
          <p className="text-xl text-gray-500">80%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


