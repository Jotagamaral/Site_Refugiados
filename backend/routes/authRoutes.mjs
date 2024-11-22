import express from 'express';
import { login, register, getUser, getUserID} from '../controllers/authController.mjs';

const router = express.Router();

// LOGIN ROUTE
router.post('/login', login);

// REGISTRO ROUTE
router.post('/register', register);

// GET DO USUARIO
router.get('/user', getUser);

// GET DO ID DO USUARIO
router.get('/user_id', getUserID);

export default router;
