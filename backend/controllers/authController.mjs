import { loginUser, registerUser, getUser_id, getUserBd } from "../models/authModel.mjs";

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

//CONTROLLER DO GET DO ID DOUSUARIO
export const getUserID = async (req,res) => {
    try{
        const data_id = await getUserBd();
        res.json(data_id.id);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuario', error });
    }
};