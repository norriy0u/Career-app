import React, { useState, useEffect } from "react";

function Home() {
  // Sample motivational quotes
  const quotes = [
    "The future depends on what you do today.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Your career is not just a job. It’s an adventure in self-discovery.",
    "The best way to predict your future is to create it.",
    "Don’t wait for the perfect moment. Take the moment and make it perfect.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  // Change quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen text-light-text flex flex-col justify-center items-center p-8">
      {/* App Name */}
      <h1 className="text-5xl font-bold text-heading-text mb-8">
        Navipath
      </h1>

      {/* Motivational Quote */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl mb-10">
        <p className="text-3xl text-center italic">{quote}</p>
      </div>

      {/* Sign Up / Sign In Buttons */}
      <div className="flex space-x-6">
        <button className="px-8 py-3 bg-primary-accent text-white rounded-lg transform hover:scale-105 transition duration-300">
          Sign Up
        </button>
        <button className="px-8 py-3 bg-gray-700 text-white rounded-lg transform hover:scale-105 transition duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Home;
