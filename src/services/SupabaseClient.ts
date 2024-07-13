import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './Supabase.database';

const supabaseUrl:string=import.meta.env.VITE_SUPABASE_URL as string
const supabaseKey:string=import.meta.env.VITE_SUPABASE_ANON_KEY as string

const supabase:SupabaseClient=createClient<Database>(supabaseUrl,supabaseKey)

export{supabase}