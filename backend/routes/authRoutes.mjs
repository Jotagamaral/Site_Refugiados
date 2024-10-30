import express from 'express';
import { login, register, getUser} from '../controllers/authController.mjs';

const router = express.Router();

// LOGIN ROUTE
router.post('/login', login);

// REGISTRO ROUTE
router.post('/register', register);

// GET DO USUARIO
router.get('/user', getUser);

export default router;
