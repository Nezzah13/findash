import type { CategorySpending, MonthlyPoint } from '../types';

export const spendingByCategory: CategorySpending[] = [
  { name: 'Товары', value: 34200, color: '#16b39a' },
  { name: 'Услуги', value: 21500, color: '#e0a82e' },
  { name: 'Другие расходы', value: 18900, color: '#5b8def' },
  { name: 'Мобильный', value: 12740, color: '#c0556f' },
];

export const monthlyFlow: MonthlyPoint[] = [
  { month: 'Авг', income: 95000, expense: 72000 },
  { month: 'Сен', income: 102000, expense: 81000 },
  { month: 'Окт', income: 88000, expense: 90000 },
  { month: 'Ноя', income: 121000, expense: 76000 },
  { month: 'Дек', income: 134000, expense: 112000 },
  { month: 'Янв', income: 132430, expense: 87340 },
];
