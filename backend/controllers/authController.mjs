import { loginUser, registerUser, getUserByUser_id } from "../models/authModel.mjs";

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
export const getUser = async (req, res) => {
    const { User_id } = await supabase.auth.getUser(); //! Esse getUser só poder ser feito no authModel.mjs, aqui no authController.mjs não tem o import do Supabase

    try {
        const { data, error } = await getUserByUser_id(User_id);

        if (error) {
            throw new Error(error.message);
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
};