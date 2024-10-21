import { supabase } from '../supabaseCliente.mjs';

// REALIZAR LOGIN
const loginUser = async (email, password) => {

    console.log('Requisição de Login de usuário');

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }
    
    return data ;








    
};

// REALIZAR REGISTRO
const registerUser = async (email, password) => {

    console.log('Requisição de Registro de usuário');

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }
    
    return data ;
};


export { loginUser, registerUser };
