import { createClient } from '@supabase/supabase-js';

//  arquivo .env
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log('Conexão Realizada')
console.log(supabase)
