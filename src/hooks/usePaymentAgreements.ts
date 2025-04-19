
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { PaymentAgreement } from '@/types';

export function usePaymentAgreements() {
  return useQuery({
    queryKey: ['payment_agreements'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('payment_agreements')
        .select(`
          *,
          debtor:debtors(name, identification),
          obligation:obligations(number, type)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching payment agreements:', error);
        return [] as PaymentAgreement[];
      }

      return data as PaymentAgreement[] || [];
    },
  });
}
