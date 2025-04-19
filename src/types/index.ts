
export interface Debtor {
  id: string;
  identification: string;
  name: string;
  email: string;
  phone: string;
  client_id: string;
  created_at: string;
  status: 'active' | 'inactive';
}

export interface Obligation {
  id: string;
  number: string;
  debtor_id: string;
  type: 'admin_fee' | 'invoice' | 'promissory_note';
  amount: number;
  due_date: string;
  status: 'pending' | 'overdue' | 'paid';
  created_at: string;
}

export interface PaymentAgreement {
  id: string;
  obligation_id: string;
  debtor_id: string;
  total_amount: number;
  installments: number;
  start_date: string;
  status: 'active' | 'completed' | 'defaulted';
  created_at: string;
}
