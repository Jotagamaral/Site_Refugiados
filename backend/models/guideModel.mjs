import { supabase } from '../supabaseCliente.mjs';
import { v4 as uuidv4 } from 'uuid';

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

const insertCompletedGuide = async ({ user_id, guide_id, completed_at }) => {
    try {
        const { data, error } = await supabase
        .schema('aurora_refugio')
        .from('completed_guides')
        .insert({ 
            user_id, 
            guide_id, 
            completed_at, 
            created_at: completed_at
            });

        if (error) {
            throw new Error(`Erro ao inserir no banco de dados: ${error.message}`);
        }

        return data;
    } catch (error) {
        console.error('Erro na função insertCompletedGuide:', error);
        throw error;
    }
};

const registerGuide = async (title, intro_text ,user_id ) => {

    var UUID = uuidv4();

    try {
        const { error } = await supabase
        .schema('aurora_refugio')
        .from('guides_manuals_dev')
        .insert({
            guide_id: UUID,
            title: title,
            content: intro_text,
            created_by: user_id
        });

        if (error) {
            throw new Error(`Erro ao inserir no banco de dados: ${error.message}`);
        }
        return UUID;
    } catch (error) {
        console.error('Erro na função registerGuide:', error);
        throw error;
    }
};

const registerQuestion = async (guide_id, title, text, question, correct_answer, incorrect_answer_1, incorrect_answer_2) => {

    console.log('Requisição de Registro de Questão');
    
    var UUID = uuidv4();

    try {
        const {data, error } = await supabase
        .schema('aurora_refugio')
        .from('questions_dev')
        .insert({
            question_id: UUID,
            guide_id: guide_id,
            enunciation_title: title,
            enunciation_text: text,
            question_text: question,
            correct_answer: correct_answer,
            incorrect_answer_1 : incorrect_answer_1,
            incorrect_answer_2 : incorrect_answer_2,
            
        });

        if (error) {
            console.log('erro na criação de question na register Guide', error);
        }
        return{ data };
    } catch (error) {
        console.error('Erro na função registerQuestion:', error);
        throw error;
    }
};


export { getAllGuides,getSectionsByGuide_id, getQuestionsBySection_id, getChoicesByQuestion_id, getCompletedGuides_Userid, insertCompletedGuide , registerGuide, registerQuestion};
