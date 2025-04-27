import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      // Normally, you'd send this to a backend API here
      console.log('User Data:', formData);
      // For now, just navigate to dashboard or home after sign up
      navigate('/dashboard');
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-dark-bg min-h-screen text-light-text flex flex-col justify-center items-center p-8">
      <h1 className="text-5xl font-bold text-heading-text mb-8">Sign Up</h1>

      {/* Error message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Sign Up Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-lg">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-6 bg-primary-accent text-white rounded-lg transform hover:scale-105 transition duration-300"
        >
          Sign Up
        </button>
      </form>

      {/* Sign In Redirect */}
      <div className="mt-4 text-center">
        <p>
          Already have an account?{' '}
          <span
            className="text-primary-accent cursor-pointer"
            onClick={() => navigate('/sign-in')}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
