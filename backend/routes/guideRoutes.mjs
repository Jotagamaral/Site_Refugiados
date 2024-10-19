import express from 'express';
import { getGuides } from '../controllers/guideController.mjs';

const router = express.Router();

// Definir a rota GET para buscar os guias
router.get('/guides', getGuides);

export default router;
