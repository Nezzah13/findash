import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { spendingByCategory } from '../../data/charts';
import { formatRub } from '../../utils/format';

export function SpendingChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={spendingByCategory}
          dataKey="value"
          nameKey="name"
          innerRadius={68}
          outerRadius={100}
          paddingAngle={2}
        >
          {spendingByCategory.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => formatRub(Number(value))} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
