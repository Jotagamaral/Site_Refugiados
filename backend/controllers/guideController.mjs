import { getAllGuides, getSectionsByGuide_id, getQuestionsBySection_id, getChoicesByQuestion_id, getCompletedGuides_Userid, insertCompletedGuide } from '../models/guideModel.mjs';

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

export const setCompletedGuides = async (req, res) => {
try {
    const { user_id, guide_id } = req.body;

    // Verifica se os dados obrigatórios foram fornecidos
    if (!user_id || !guide_id) {
        return res.status(400).json({ error: 'user_id e guide_id são obrigatórios.' });
    }

    const completed_at = new Date().toISOString();

    // Chama o modelo para inserir no banco
    const newCompletedGuide = await insertCompletedGuide({
        user_id,
        guide_id,
        completed_at,
    });

    res.status(201).json({ message: 'Guia completado com sucesso.', data: newCompletedGuide });
    } catch (error) {
        console.error('Erro ao registrar guia completado:', error);
        res.status(500).json({ error: 'Erro interno no servidor.' });
    }
};
