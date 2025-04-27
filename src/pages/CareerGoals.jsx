import React from 'react';

const CareerGoals = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-white mb-6">Career Goals</h2>
      {/* Sample Goal List */}
      <div className="space-y-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">Become a Software Engineer</h3>
          <p className="text-lg text-gray-400">Goal progress: 70%</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">Learn Data Structures & Algorithms</h3>
          <p className="text-lg text-gray-400">Goal progress: 50%</p>
        </div>
        {/* Add more goals here as needed */}
      </div>
    </div>
  );
};

export default CareerGoals;
