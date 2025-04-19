
import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are available in production
if (import.meta.env.PROD && (!supabaseUrl || !supabaseAnonKey)) {
  console.error('Supabase environment variables are missing');
}

// Create a mock client for development without credentials
const createMockClient = () => {
  console.warn('Using mock Supabase client. API calls will fail.');
  return {
    from: () => ({
      select: () => ({
        order: () => ({
          then: () => Promise.resolve({ data: [], error: null }),
        }),
      }),
    }),
    auth: {
      signIn: () => Promise.resolve({ user: null, session: null, error: new Error('Mock client') }),
      signOut: () => Promise.resolve({ error: null }),
    },
  } as unknown;
};

// Export real client if credentials exist, otherwise export mock client
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient() as ReturnType<typeof createClient>;
