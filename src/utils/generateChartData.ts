// utils/generateChartData.ts
export const generateChartData = (
    principal: number,
    rate: number,
    years: number
  ) => {
    const data = [];
    let amount = principal;
  
    for (let year = 1; year <= years; year++) {
      amount *= 1 + rate / 100;
      data.push({
        year: `${year}년`,
        amount: parseFloat(amount.toFixed(2)),
      });
    }
  
    return data;
  };
  