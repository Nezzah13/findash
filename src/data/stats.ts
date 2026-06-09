import type { Stat } from '../types';

export const stats: Stat[] = [
  { id: 'balance', label: 'Баланс в кошельке', value: 1345254, kind: 'currency', variant: 'teal' },
  { id: 'spent', label: 'Потрачено за январь', value: 87340, kind: 'currency', variant: 'orange' },
  { id: 'received', label: 'Поступило за январь', value: 132430, kind: 'currency', variant: 'green' },
  { id: 'bonuses', label: 'Бонусов', value: 10348, kind: 'bonus', variant: 'blue' },
];
