import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { HistoryPage } from './pages/HistoryPage/HistoryPage';
import { CardsPage } from './pages/CardsPage/CardsPage';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
