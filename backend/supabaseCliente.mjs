import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Inicializa as variáveis de ambiente
dotenv.config();

//  Obtém as variáveis de ambiente
const supabaseUrl = process.env.SUPABASE_URL; // Aqui é SUPABASE_URL, sem REACT_APP_
const supabaseKey = process.env.SUPABASE_KEY;


if (!supabaseUrl || !supabaseKey) {
  throw new Error('supabaseUrl and supabaseKey are required.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
