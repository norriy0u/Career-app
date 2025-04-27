// JobOpportunities.jsx

import React from "react";

function JobOpportunities() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Job Opportunity Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-200">
          <h3 className="text-2xl font-bold text-gray-800">Software Engineer</h3>
          <p className="text-lg text-gray-500">Company XYZ</p>
        </div>

        {/* Job Opportunity Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-200">
          <h3 className="text-2xl font-bold text-gray-800">Product Manager</h3>
          <p className="text-lg text-gray-500">Company ABC</p>
        </div>

        {/* Job Opportunity Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-200">
          <h3 className="text-2xl font-bold text-gray-800">UX/UI Designer</h3>
          <p className="text-lg text-gray-500">Company DEF</p>
        </div>
      </div>
    </div>
  );
}

export default JobOpportunities;



