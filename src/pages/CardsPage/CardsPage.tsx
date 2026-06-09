import { Typography } from 'antd';
import { cards } from '../../data/cards';
import { formatRub } from '../../utils/format';
import styles from './CardsPage.module.css';

const { Title } = Typography;

export function CardsPage() {
  return (
    <div>
      <Title level={3} style={{ marginBottom: 20 }}>
        Мои карты
      </Title>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.item}>
            <div className={styles.card} style={{ background: card.gradient }}>
              <div className={styles.top}>
                <span className={styles.system}>{card.system}</span>
                <span className={styles.chip} />
              </div>
              <span className={styles.number}>{card.number}</span>
              <div className={styles.bottom}>
                <div>
                  <div className={styles.caption}>Владелец</div>
                  <div className={styles.field}>{card.holder}</div>
                </div>
                <div>
                  <div className={styles.caption}>До</div>
                  <div className={styles.field}>{card.expiry}</div>
                </div>
              </div>
            </div>
            <div className={styles.balanceRow}>
              <span className={styles.balanceLabel}>Баланс</span>
              <span className={styles.balanceValue}>{formatRub(card.balance)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
