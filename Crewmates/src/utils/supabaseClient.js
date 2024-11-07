import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://upstsmkivzkpmttyjebv.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY; // Make sure to set up the environment variable
export const supabase = createClient(supabaseUrl, supabaseKey);
