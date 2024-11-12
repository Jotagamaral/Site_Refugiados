import { supabase } from '../supabaseCliente.mjs';

// BUSCAR GUIAS
const getAllGuides = async () => {

    const { data, error } = await supabase
    .schema('aurora_refugio')
    .from('guides_manuals')
    .select('*');
    
    return { data, error };
};

// BUSCAR PERGUNTAS DE GUIAS
const getQuestionsByGuide_id = async (guide_id) => {

    console.log('Requisição de perguntas de guide:', guide_id);

    const { data, error } = await supabase
    .schema('aurora_refugio')
    .from('questions')
    .select('question_id, correct_choice_id, question_text')
    .eq('guide_id', guide_id);
    
    return { data, error };
};

// BUSCAR ALTERNATIVAS DE PERGUNTAS
const getChoicesByQuestion_id = async (question_id) => {

    console.log('Requisição de alternativas da pergunta:', question_id);

    const {data, error} = await supabase
    .schema('aurora_refugio')
    .from('choices')
    .select('choice_id, choice_text')
    .eq('question_id', question_id);
    
    return { data, error };
};



export { getAllGuides, getQuestionsByGuide_id, getChoicesByQuestion_id };
