import { useInvestmentStore } from '../store/investmentStore';

const ResultBox = () => {
  const { result } = useInvestmentStore();

  if (result === 0) return null;

  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-md text-center">
      <p className="text-lg text-gray-700">예상 수익</p>
      <p className="text-2xl font-bold text-green-600 mt-1">
        {result.toLocaleString()} 원
      </p>
    </div>
  );
};

export default ResultBox;
