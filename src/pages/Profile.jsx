import React, { useState } from "react";

function Profile() {
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission (just for demo)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen p-8 text-white">
      <div className="flex flex-col items-center mb-6">
        {/* Profile Picture */}
        <img
          src={image || 'https://ui-avatars.com/api/?name=User&background=random&color=fff'}
          alt="Profile"
          className="w-36 h-36 rounded-full mb-4 shadow-xl transform hover:scale-110 transition duration-300 ease-in-out"
        />
        {/* Profile Picture Upload Button */}
        <input
          type="file"
          onChange={handleImageChange}
          className="text-white bg-gray-700 p-3 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:scale-105 transform transition duration-300">
          Edit Profile Picture
        </button>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-xl mx-auto">
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xl font-medium">Full Name</label>
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="John Doe"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-xl font-medium">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="4"
              className="w-full p-3 mt-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="A brief bio about yourself"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-xl font-medium">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="City, Country"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-xl font-medium">Skills</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="e.g., JavaScript, Python, UI Design"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-xl font-medium">LinkedIn URL</label>
            <input
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="https://linkedin.com/in/johndoe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xl font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="johndoe@example.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xl font-medium">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="123-456-7890"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg transform hover:scale-105 transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;



