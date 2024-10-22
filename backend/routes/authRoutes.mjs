import express from 'express';
import { login, register } from '../controllers/authController.mjs';

const router = express.Router();

// LOGIN ROUTE
router.post('/login', login);

// REGISTRO ROUTE
router.post('/register', register);

export default router;
