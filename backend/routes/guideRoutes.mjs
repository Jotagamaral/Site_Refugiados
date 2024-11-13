import express from 'express';
import { getGuides, getQuestions, getChoices, getSections } from '../controllers/guideController.mjs';

const router = express.Router();


// GET BUSCA GUIAS
router.get('/guides', getGuides);

// GET BUSCA SEÇÕES DE GUIAS
router.get('/guides/:guide_id/sections', getSections)

// GET BUSCA QUESTÕES DE GUIAS
router.get('/guides/:section_id/questions', getQuestions)

// GET BUSCA ALTERNATIVAS DE QUESTÕES
router.get('/guides/:guide_id/:question_id/choices', getChoices)

export default router;
