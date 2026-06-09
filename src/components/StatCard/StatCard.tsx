import type { Stat } from '../../types';
import { formatRub } from '../../utils/format';
import styles from './StatCard.module.css';

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  const display =
    stat.kind === 'currency'
      ? formatRub(stat.value)
      : stat.value.toLocaleString('ru-RU');

  return (
    <div className={`${styles.card} ${styles[stat.variant]}`}>
      <span className={styles.value}>{display}</span>
      <span className={styles.label}>{stat.label}</span>
    </div>
  );
}
