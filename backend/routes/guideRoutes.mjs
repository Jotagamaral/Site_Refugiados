import express from 'express';
import { getGuides, getQuestions, getChoices, getSections, getCompletedGuides, setCompletedGuides } from '../controllers/guideController.mjs';

const router = express.Router();


// GET BUSCA GUIAS
router.get('/guides', getGuides);

// GET BUSCA SEÇÕES DE GUIAS
router.get('/guides/:guide_id/sections', getSections)

// GET BUSCA QUESTÕES DE GUIAS
router.get('/guides/:section_id/questions', getQuestions)

// GET BUSCA ALTERNATIVAS DE QUESTÕES
router.get('/guides/:question_id/choices', getChoices)

// GET BUSCA GUIAS COMPLETOS DO USUARIO
router.get('/guides/:user_id', getCompletedGuides)

// POST para completar um guia
router.post('/guides/completed_guides', setCompletedGuides);

export default router;
