// components/InvestmentTable.tsx
import { useInvestmentStore } from '../store/investmentStore';
import { generateTableData } from '../utils/generateTableData';

const InvestmentTable = () => {
  const { principal, rate, years, result } = useInvestmentStore();

  if (result === 0) return null;

  const rows = generateTableData(principal, rate, years);

  return (
    <div className="mt-8 overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📋 연도별 상세 내역</h2>
      <table className="w-full table-auto text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">연도</th>
            <th className="border px-4 py-2">원금</th>
            <th className="border px-4 py-2">이자</th>
            <th className="border px-4 py-2">총액</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.year} className="text-center">
              <td className="border px-4 py-2">{row.year}년</td>
              <td className="border px-4 py-2">{row.principal.toLocaleString()} 원</td>
              <td className="border px-4 py-2">{row.interest.toLocaleString()} 원</td>
              <td className="border px-4 py-2 font-bold text-green-700">{row.total.toLocaleString()} 원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
