import express from "express";
import { getNoticiasCNN, getNoticiasGoogle } from "../controllers/newsController.mjs";

const router = express.Router();

// Rota para buscar notícias
router.get("/noticias-cnn", getNoticiasCNN); // Não está funcionando

// Rota para buscar notícias
router.get("/noticias-google", getNoticiasGoogle);

export default router;
