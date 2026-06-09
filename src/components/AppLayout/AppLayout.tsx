import { Layout, Menu, Breadcrumb } from 'antd';
import type { MenuProps } from 'antd';
import {
  AppstoreOutlined,
  HistoryOutlined,
  CreditCardOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './AppLayout.module.css';

const { Sider, Header, Content } = Layout;

const menuItems: MenuProps['items'] = [
  { key: '/', icon: <AppstoreOutlined />, label: <Link to="/">Дашборд</Link> },
  { key: '/history', icon: <HistoryOutlined />, label: <Link to="/history">История</Link> },
  { key: '/cards', icon: <CreditCardOutlined />, label: <Link to="/cards">Мои карты</Link> },
];

const titles: Record<string, string> = {
  '/': 'Дашборд',
  '/history': 'История операций',
  '/cards': 'Мои карты',
};

export function AppLayout() {
  const location = useLocation();

  return (
    <Layout className={styles.layout}>
      <Sider theme="light" width={230} className={styles.sider}>
        <div className={styles.logo}>
          <WalletOutlined />
          <span>МойКошелёк</span>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          className={styles.menu}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            padding: '0 24px',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <Breadcrumb
            items={[
              { title: 'Кабинет' },
              { title: titles[location.pathname] ?? '' },
            ]}
          />
        </Header>

        <Content style={{ margin: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
