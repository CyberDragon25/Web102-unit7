import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://upstsmkivzkpmttyjebv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwc3RzbWtpdnprcG10dHlqZWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4NDk4OTcsImV4cCI6MjA0NjQyNTg5N30.gBQ4iyUHgI6NMxmx6eM5eGMqPeVhZXzVBFHBAjjsHjU"; 
export const supabase = createClient(supabaseUrl, supabaseKey);
