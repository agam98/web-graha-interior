import { createClient } from '@supabase/supabase-js';
import { config } from './env.js';

const supabase = createClient(config.supabase.url, config.supabase.anonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  }
});

export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('projects').select('count');
    if (error) throw error;
    console.log('Successfully connected to Supabase');
    return true;
  } catch (error) {
    console.error('Error connecting to Supabase:', error.message);
    return false;
  }
};

export default supabase;