import { getAllGuides } from '../models/guideModel.mjs';

// Controlador para buscar todos os guias
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
