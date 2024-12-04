import { getAllGuides, getSectionsByGuide_id, getQuestionsBySection_id, getChoicesByQuestion_id, getCompletedGuides_Userid, insertCompletedGuide, registerGuide, registerQuestion} from '../models/guideModel.mjs';

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

//CONTROLLER DE REGISTRO DE GUIAS
export const setGuide = async (req, res) => {
    const { title, intro_text, user_id} = req.body;

    try {
        const guide_id = await registerGuide(title, intro_text, user_id);

        // Envia o resultado no formato esperado
        res.json({ guide_id });
    } catch (error) {
        console.log('Erro na criação de guia', error);
        res.status(500).json({ error: 'Erro ao realizar registro de Guia' });
    }
};

//CONTROLLER DE REGISTRO DE QUESTÕES
export const setQuestion = async (req, res) => {
    const {guide_id,  title, text, question, correct_answer, incorrect_answer_1, incorrect_answer_2} = req.body;

    try {
        const result = await registerQuestion(guide_id, title, text, question, correct_answer, incorrect_answer_1, incorrect_answer_2);

        if (result.error) {
            return res.status(400).json({ error: result.error });
        }

        res.json({ message: 'Questão salva com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar registro da Questão na setquesion' });
    }
};
