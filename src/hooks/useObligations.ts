
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Obligation } from '@/types';

export function useObligations() {
  return useQuery({
    queryKey: ['obligations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('obligations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Obligation[];
    },
  });
}
