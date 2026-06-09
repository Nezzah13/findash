export interface Stat {
  id: string;
  label: string;
  value: number;
  kind: 'currency' | 'bonus';
  variant: 'teal' | 'orange' | 'green' | 'blue';
}

export interface CategorySpending {
  name: string;
  value: number;
  color: string;
}

export interface MonthlyPoint {
  month: string;
  income: number;
  expense: number;
}

export interface Transaction {
  id: number;
  date: string;
  title: string;
  category: string;
  amount: number;
}

export interface BankCard {
  id: number;
  system: string;
  number: string;
  holder: string;
  expiry: string;
  balance: number;
  gradient: string;
}
