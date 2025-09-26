import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  course: string;
  created_at: string;
  updated_at: string;
}

export interface RegistrationSettings {
  id: string;
  max_registrations: number;
  current_count: number;
  countdown_end_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Registration service functions
export const registrationService = {
  // Get current registration settings
  async getSettings(): Promise<RegistrationSettings | null> {
    const { data, error } = await supabase
      .from('registration_settings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching registration settings:', error);
      return null;
    }

    return data;
  },

  // Check if registration is allowed
  async canRegister(): Promise<boolean> {
    const { data, error } = await supabase.rpc('can_register');
    
    if (error) {
      console.error('Error checking registration status:', error);
      return false;
    }

    return data;
  },

  // Submit a new registration
  async submitRegistration(registrationData: Omit<Registration, 'id' | 'created_at' | 'updated_at'>): Promise<{ success: boolean; error?: string }> {
    // First check if registration is allowed
    const canRegister = await this.canRegister();
    if (!canRegister) {
      return { success: false, error: 'Registration is closed or limit reached' };
    }

    const { data, error } = await supabase
      .from('registrations')
      .insert([registrationData])
      .select()
      .single();

    if (error) {
      console.error('Error submitting registration:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  },

  // Get registration count
  async getRegistrationCount(): Promise<number> {
    const { count, error } = await supabase
      .from('registrations')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Error getting registration count:', error);
      return 0;
    }

    return count || 0;
  },

  // Subscribe to registration changes
  subscribeToRegistrations(callback: (count: number) => void) {
    return supabase
      .channel('registrations')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'registrations' },
        async () => {
          const count = await this.getRegistrationCount();
          callback(count);
        }
      )
      .subscribe();
  }
};