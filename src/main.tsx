import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import 'antd/dist/reset.css';
import App from './App.tsx';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        locale={ruRU}
        theme={{ token: { colorPrimary: '#16b39a', borderRadius: 10 } }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
);
