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
const registerUser = async (email, password, name, location) => {

    console.log('Requisição de Registro de usuário');

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    
    const userId = data.user?.id;
    
    if (userId) {
        const { error: insertError } = await supabase
        .schema('aurora_refugio')
        .from('users')
        .insert({
            auth_user_id: userId,
            name: name,
            email: email,
            location: location
        });

        if (insertError) throw insertError;
        else {
            console.log('Usuário registrado com sucesso!');
        }
    }

    if (error) {
        throw new Error(error.message);
    }
    
    return data ;
};

// BUSCAR USER POR USER_ID
const getUserBd = async(res) => {

    try {
        const {data, error} = await supabase.auth.getUser();
        
        if (error) {
            throw new Error(error.message);
        }
        return data.user;

    } catch (error) {
        console.log('Error ao buscar o usuario', error)
    }
};

const getUser_id = async (User_id) => {

    const {data, error} = await supabase
    .schema('aurora_refugio')
    .from('users')
    .select('name, email, location')
    .eq('auth_user_id', User_id);
    
    return { data, error };
};




export { loginUser, registerUser, getUser_id, getUserBd};
