import {
  MobileOutlined,
  SwapOutlined,
  GiftOutlined,
  TagsOutlined,
  FileTextOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import type { ReactNode } from 'react';
import styles from './ActionTiles.module.css';

interface Tile {
  title: string;
  icon: ReactNode;
  color: string;
}

const tiles: Tile[] = [
  { title: 'Пополнить телефон', icon: <MobileOutlined />, color: '#16b39a' },
  { title: 'С карты на карту', icon: <SwapOutlined />, color: '#1f97c4' },
  { title: 'Подарки', icon: <GiftOutlined />, color: '#b8455f' },
  { title: 'Купоны', icon: <TagsOutlined />, color: '#e98a2b' },
  { title: 'Выставить счёт', icon: <FileTextOutlined />, color: '#c0392b' },
  { title: 'Оплатить услугу', icon: <CreditCardOutlined />, color: '#e0a82e' },
];

export function ActionTiles() {
  return (
    <div className={styles.grid}>
      {tiles.map((tile) => (
        <button
          key={tile.title}
          type="button"
          className={styles.tile}
          style={{ background: tile.color }}
        >
          <span className={styles.icon}>{tile.icon}</span>
          {tile.title}
        </button>
      ))}
    </div>
  );
}
