const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Login route
router.post('/login', authController.login);

// Verify token route (protected)
router.get('/verify', auth, authController.verifyToken);

module.exports = router; 