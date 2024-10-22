import { getAllGuides, getQuestionsByGuide_id, getChoicesByQuestion_id } from '../models/guideModel.mjs';

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

// CONTROLLER DE QUESTÕES
export const getQuestions = async (req, res) => {
    const { guide_id } = req.params;

    try {
        const { data, error } = await getQuestionsByGuide_id(guide_id);

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
