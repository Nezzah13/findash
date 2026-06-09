import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { monthlyFlow } from '../../data/charts';
import { formatRub } from '../../utils/format';

export function BalanceChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={monthlyFlow} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis dataKey="month" tickLine={false} />
        <YAxis tickFormatter={(value) => `${value / 1000}к`} width={44} tickLine={false} />
        <Tooltip formatter={(value) => formatRub(Number(value))} />
        <Legend />
        <Line type="monotone" dataKey="income" name="Доходы" stroke="#16b39a" strokeWidth={2.5} dot={false} />
        <Line type="monotone" dataKey="expense" name="Расходы" stroke="#e0524d" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
