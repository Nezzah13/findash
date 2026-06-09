import type { Transaction } from '../types';

export const transactions: Transaction[] = [
  { id: 1, date: '2026-01-28', title: 'Перевод от Алексея П.', category: 'Переводы', amount: 15000 },
  { id: 2, date: '2026-01-27', title: 'Пятёрочка', category: 'Товары', amount: -2340 },
  { id: 3, date: '2026-01-26', title: 'Оплата ЖКХ', category: 'Услуги', amount: -6800 },
  { id: 4, date: '2026-01-24', title: 'Мобильная связь', category: 'Мобильный', amount: -650 },
  { id: 5, date: '2026-01-22', title: 'Зарплата', category: 'Доходы', amount: 98000 },
  { id: 6, date: '2026-01-20', title: 'Wildberries', category: 'Товары', amount: -4290 },
  { id: 7, date: '2026-01-18', title: 'Кафе «Друзья»', category: 'Товары', amount: -1850 },
  { id: 8, date: '2026-01-15', title: 'Возврат за билет', category: 'Доходы', amount: 3200 },
  { id: 9, date: '2026-01-12', title: 'Яндекс.Такси', category: 'Услуги', amount: -780 },
  { id: 10, date: '2026-01-10', title: 'Подписка на музыку', category: 'Услуги', amount: -499 },
];
