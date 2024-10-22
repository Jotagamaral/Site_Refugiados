import express from 'express';
import { getGuides, getQuestions, getChoices } from '../controllers/guideController.mjs';

const router = express.Router();


// GET BUSCA GUIAS
router.get('/guides', getGuides);

// GET BUSCA QUESTÕES DE GUIAS
router.get('/guides/:guide_id/questions', getQuestions)

// GET BUSCA ALTERNATIVAS DE QUESTÕES
router.get('/guides/:guide_id/:question_id/choices', getChoices)

export default router;
