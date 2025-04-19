
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { PaymentAgreement } from '@/types';

export function usePaymentAgreements() {
  return useQuery({
    queryKey: ['payment_agreements'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('payment_agreements')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        return data as PaymentAgreement[] || [];
      } catch (error) {
        console.error('Error fetching payment agreements:', error);
        return [] as PaymentAgreement[];
      }
    },
  });
}
