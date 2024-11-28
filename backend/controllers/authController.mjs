import { loginUser, registerUser, getUser_id, getUserBd } from "../models/authModel.mjs";
import { getAllGuides, getCompletedGuides_Userid} from "../models/guideModel.mjs"

// CONTROLLER DE LOGIN
export const login = async (req, res) => {

    const {email, password} = req.body;

    try {
        const result = await loginUser(email, password);

        if (result.error) {
            return res.status(401).json({ error: result.error });
        }

        res.status(200).json({ session: result.session });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar o login  | CONTROLLER' });
    }
};

//CONTROLLER DE REGISTRO
export const register = async (req, res) => {
    const { email, password, name, location } = req.body;

    try {
        const result = await registerUser(email, password, name, location);

        if (result.error) {
            return res.status(400).json({ error: result.error });
        }

        res.status(201).json({ user: result.user });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar registro' });
    }
};

//CONTROLLER DO GET DO USUARIO
export const getUser = async (req,res) => {
    const data_id = await getUserBd();

    try {
        const { data, error } = await getUser_id(data_id.id);

        if (error) {
            throw new Error(error.message);
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
};

//CONTROLLER DO GET DO ID DO USUARIO
export const getUserID = async (req,res) => {
    try{
        const data_id = await getUserBd();
        res.json(data_id.id);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuario', error });
    }
};

//CONTROLLER DO GET GUIDES COMPLETOS USUÁRIO
export const getCompleteGuideData = async (req, res) => {
    const user_id = await getUserBd();

    try {
        // Buscar todos os guias
        const { data: guides, error: errorGuides } = await getAllGuides();
        if (errorGuides) throw new Error(errorGuides.message);
        
        // Buscar guias completados pelo usuário
        const { data: completedGuides, error: completedGuidesError } = await getCompletedGuides_Userid(user_id.id);
        if (completedGuidesError) throw new Error(completedGuidesError.message);

        // Mapeia os IDs de guias completados
        const completedGuideIds = completedGuides.map((guide) => guide.guide_id);

        // Construir resposta consolidada
        const response = guides.map((guide) => ({
            ...guide,
            isCompleted: completedGuideIds.includes(guide.guide_id),
        }));

        res.json(response);
    } catch (error) {
        console.error("Erro ao buscar dados completos dos guias:", error.message);
        res.status(500).json({ error: 'Erro ao buscar os dados completos dos guias' });
    }
};
