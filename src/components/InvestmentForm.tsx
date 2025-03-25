// components/InvestmentForm.tsx
import { useInvestmentStore } from '../store/investmentStore';
import { formatNumber, unformatNumber } from '../utils/numberFormat';

const InvestmentForm = () => {
  const { principal, rate, years, setPrincipal, setRate, setYears } = useInvestmentStore();

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <label className="text-sm text-gray-700">투자금 (원)</label>
        <input
          type="text"
          value={formatNumber(principal)}
          onChange={(e) => setPrincipal(unformatNumber(e.target.value))}
          className="sm:col-span-2 w-full p-2 border rounded text-right"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <label className="text-sm text-gray-700">연 이자율 (%)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="sm:col-span-2 w-full p-2 border rounded text-right"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <label className="text-sm text-gray-700">투자 기간 (년)</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="sm:col-span-2 w-full p-2 border rounded text-right"
        />
      </div>
    </div>
  );
};

export default InvestmentForm;
