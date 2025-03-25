// App.tsx
import Header from './components/Header';
import InvestmentForm from './components/InvestmentForm';
import ResultBox from './components/ResultBox';
import InvestmentChart from './components/InvestmentChart';
import InvestmentTable from './components/InvestmentTable';

import { calculateCompoundInterest } from './utils/calculateCompound';
import { useInvestmentStore } from './store/investmentStore';

function App() {
  const { principal, rate, years, result, setResult } = useInvestmentStore();

  const handleCalculate = () => {
    const r = calculateCompoundInterest(principal, rate, years);
    setResult(r);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <Header />
        <InvestmentForm />
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-6"
        >
          계산하기
        </button>
        <ResultBox />
        <InvestmentChart />
        <InvestmentTable />
      </div>
    </div>
  );
}

export default App;
