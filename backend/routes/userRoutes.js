// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para login
router.post('/login', userController.login);

// Rota para registro
router.post('/register', userController.register);

module.exports = router;
