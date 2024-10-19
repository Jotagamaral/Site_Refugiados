import { supabase } from '../supabaseCliente.mjs';

// Função para buscar todos os guias
export const getAllGuides = async () => {
    const { data, error } = await supabase
    .schema('aurora_refugio')
    .from('guides_manuals')
    .select('*');
    
    return { data, error };
};
