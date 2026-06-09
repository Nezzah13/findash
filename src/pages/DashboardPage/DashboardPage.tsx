import { Row, Col, Card, Typography } from 'antd';
import { stats } from '../../data/stats';
import { StatCard } from '../../components/StatCard/StatCard';
import { SpendingChart } from '../../components/SpendingChart/SpendingChart';
import { BalanceChart } from '../../components/BalanceChart/BalanceChart';
import { ActionTiles } from '../../components/ActionTiles/ActionTiles';
import { RecentTransactions } from '../../components/RecentTransactions/RecentTransactions';

const { Title } = Typography;

export function DashboardPage() {
  return (
    <div>
      <Title level={3} style={{ marginBottom: 20 }}>
        Обзор
      </Title>

      <Row gutter={[16, 16]}>
        {stats.map((stat) => (
          <Col xs={24} sm={12} xl={6} key={stat.id}>
            <StatCard stat={stat} />
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={10}>
          <Card title="Расходы за январь">
            <SpendingChart />
          </Card>
        </Col>
        <Col xs={24} lg={14}>
          <Card title="Доходы и расходы">
            <BalanceChart />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={14}>
          <Card title="Быстрые действия">
            <ActionTiles />
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card title="Последние операции">
            <RecentTransactions />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
