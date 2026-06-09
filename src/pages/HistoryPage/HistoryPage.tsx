import { useMemo, useState } from 'react';
import { Table, Tag, Input, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { transactions } from '../../data/transactions';
import { formatRub, formatDate } from '../../utils/format';
import type { Transaction } from '../../types';

const { Title } = Typography;

const categoryColors: Record<string, string> = {
  Товары: 'blue',
  Услуги: 'orange',
  Мобильный: 'magenta',
  Переводы: 'purple',
  Доходы: 'green',
};

export function HistoryPage() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return transactions.filter((item) =>
      item.title.toLowerCase().includes(query),
    );
  }, [search]);

  const columns: ColumnsType<Transaction> = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      width: 150,
      render: (date: string) => formatDate(date),
    },
    {
      title: 'Операция',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => (
        <Tag color={categoryColors[category]}>{category}</Tag>
      ),
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (amount: number) => (
        <span
          style={{
            color: amount < 0 ? '#e0524d' : '#1f9a52',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          {amount < 0 ? '−' : '+'}
          {formatRub(Math.abs(amount))}
        </span>
      ),
    },
  ];

  return (
    <div>
      <Title level={3} style={{ marginBottom: 20 }}>
        История операций
      </Title>

      <Input.Search
        placeholder="Поиск по операциям"
        allowClear
        style={{ maxWidth: 320, marginBottom: 16 }}
        onChange={(event) => setSearch(event.target.value)}
      />

      <Table
        columns={columns}
        dataSource={filtered}
        rowKey="id"
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
}
