import { getAllGuides, getSectionsByGuide_id, getQuestionsBySection_id, getChoicesByQuestion_id, getCompletedGuides_Userid } from '../models/guideModel.mjs';

// CONTROLLER DE GUIAS
export const getGuides = async (req, res) => {
    try {
        const { data, error } = await getAllGuides();

        if (error) {
            throw new Error(error.message);
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os guias' });
    }
};

// CONTROLLER DE SEÇÕES
export const getSections = async (req, res) => {
    const { guide_id } = req.params;

    try {
        const { data, error } = await getSectionsByGuide_id(guide_id);

        if (error) {
            throw new Error(error.message);
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as seções' });
    }
};

// CONTROLLER DE QUESTÕES
export const getQuestions = async (req, res) => {
    const { section_id } = req.params;

    try {
        const { data, error } = await getQuestionsBySection_id(section_id);

        if (error) {
            throw new Error(error.message);
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as perguntas' });
    }
};

//CONTROLLER DE ALTERNATIVAS
export const getChoices = async (req, res) => {
    const { question_id } = req.params;

    try {
        const { data, error } = await getChoicesByQuestion_id(question_id);

        if (error) {
            throw new Error(error.message);
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as alternativas' });
    }
};

// CONTROLLER DE SEÇÕES
export const getCompletedGuides = async (req, res) => {
    const { user_id } = req.params;

    try {
        const { data, error } = await getCompletedGuides_Userid(user_id);

        if (error) {
            throw new Error(error.message);
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os Guias Completados' });
    }
};