import type { BankCard } from '../types';

export const cards: BankCard[] = [
  {
    id: 1,
    system: 'VISA',
    number: '•••• 4242',
    holder: 'IVAN PETROV',
    expiry: '08/27',
    balance: 845300,
    gradient: 'linear-gradient(135deg, #16b39a, #0d8a76)',
  },
  {
    id: 2,
    system: 'Mastercard',
    number: '•••• 8810',
    holder: 'IVAN PETROV',
    expiry: '11/26',
    balance: 412600,
    gradient: 'linear-gradient(135deg, #3a4a6b, #1f2940)',
  },
  {
    id: 3,
    system: 'МИР',
    number: '•••• 1199',
    holder: 'IVAN PETROV',
    expiry: '03/28',
    balance: 87354,
    gradient: 'linear-gradient(135deg, #7a4ec0, #512f8a)',
  },
];
