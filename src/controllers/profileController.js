// backend/src/controllers/profileController.js

// In-memory “database” for demo
let profile = {
  name: "John Doe",
  email: "johndoe@example.com",
  bio: "Passionate about embedded systems."
};

// GET /api/profile
exports.getProfile = (req, res) => {
  res.json(profile);
};

// PUT /api/profile
exports.updateProfile = (req, res) => {
  const { name, email, bio } = req.body;
  // Simple validation
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }
  profile = { name, email, bio };
  res.json(profile);
};
