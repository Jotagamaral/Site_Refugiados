import express from 'express';
import { login, register } from '../controllers/authController.mjs';

const router = express.Router();

// Rota de login
router.post('/login', login);

// Rota de registro
router.post('/register', register);

export default router;
