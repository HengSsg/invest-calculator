// utils/generateTableData.ts
export interface TableRow {
    year: number;
    principal: number;
    interest: number;
    total: number;
  }
  
  export const generateTableData = (principal: number, rate: number, years: number): TableRow[] => {
    const data: TableRow[] = [];
    let total = principal;
  
    for (let i = 1; i <= years; i++) {
      const interest = total * (rate / 100);
      total += interest;
  
      data.push({
        year: i,
        principal: Math.round(total - interest),
        interest: Math.round(interest),
        total: Math.round(total),
      });
    }
  
    return data;
  };
  