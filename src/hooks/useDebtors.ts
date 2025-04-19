
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Debtor } from '@/types';

export function useDebtors() {
  return useQuery({
    queryKey: ['debtors'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('debtors')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Debtor[] || [];
      } catch (error) {
        console.error('Error fetching debtors:', error);
        return [] as Debtor[];
      }
    },
  });
}
