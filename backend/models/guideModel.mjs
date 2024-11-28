import { supabase } from '../supabaseCliente.mjs';

// BUSCAR GUIAS
const getAllGuides = async () => {

    //console.log('Requisição de guias');

    const { data, error } = await supabase
    .schema('aurora_refugio')
    .from('guides_manuals')
    .select('*');
    
    return { data, error };
};

// BUSCAR SEÇÕES DE GUIAS
const getSectionsByGuide_id = async (guide_id) => {

    //console.log('Requisição de seção de guide:', guide_id);

    const { data, error } = await supabase
    .schema('aurora_refugio')
    .from('sections')
    .select('section_id, section_title, explanation')
    .eq('guide_id', guide_id);
    
    return { data, error };
};

// BUSCAR PERGUNTAS DE GUIAS
const getQuestionsBySection_id = async (section_id) => {

    //console.log('Requisição de perguntas de seção:', section_id);

    const { data, error } = await supabase
    .schema('aurora_refugio')
    .from('questions')
    .select('question_id, correct_choice_id, question_text')
    .eq('section_id', section_id);
    
    return { data, error };
};

// BUSCAR ALTERNATIVAS DE PERGUNTAS
const getChoicesByQuestion_id = async (question_id) => {

    //console.log('Requisição de alternativas da pergunta:', question_id);

    const {data, error} = await supabase
    .schema('aurora_refugio')
    .from('choices')
    .select('choice_id, choice_text')
    .eq('question_id', question_id);
    
    return { data, error };
};

const getCompletedGuides_Userid = async (user_id) => {

    //console.log('Requisição de Guias completos para o User de Id:', user_id);

    const { data, error } = await supabase
    .schema('aurora_refugio')
    .from('completed_guides')
    .select('guide_id')
    .eq('user_id', user_id);
    
    return { data, error };
};

export { getAllGuides,getSectionsByGuide_id, getQuestionsBySection_id, getChoicesByQuestion_id, getCompletedGuides_Userid };
