import { List } from 'antd';
import { transactions } from '../../data/transactions';
import { formatRub, formatDate } from '../../utils/format';
import styles from './RecentTransactions.module.css';

export function RecentTransactions() {
  const recent = transactions.slice(0, 5);

  return (
    <List
      dataSource={recent}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description={`${formatDate(item.date)} · ${item.category}`}
          />
          <span className={item.amount < 0 ? styles.negative : styles.positive}>
            {item.amount < 0 ? '−' : '+'}
            {formatRub(Math.abs(item.amount))}
          </span>
        </List.Item>
      )}
    />
  );
}
