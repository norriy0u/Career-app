// backend/src/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const {
  getProfile,
  updateProfile
} = require('../controllers/profileController');

// GET  /api/profile       → fetch profile data
router.get('/', getProfile);

// PUT  /api/profile       → update profile data
router.put('/', updateProfile);

module.exports = router;
