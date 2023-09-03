// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');


// Route for user login
router.post('/login', authController.login);

// Route for user registration
router.post('/register', authController.register);
router.get('/check-login', verifyToken, authController.checkLogin);


module.exports = router;


