// components/InvestmentChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useInvestmentStore } from '../store/investmentStore';
import { generateChartData } from '../utils/generateChartData';

const InvestmentChart = () => {
  const { principal, rate, years, result } = useInvestmentStore();

  if (result === 0) return null;

  const chartData = generateChartData(principal, rate, years);

  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📈 성장 곡선</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => `${(v / 10000).toFixed(0)}만`} />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} 원`} />
          <Line type="monotone" dataKey="amount" stroke="#4f46e5" strokeWidth={3} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default InvestmentChart;
