// utils/calculateCompound.ts
export const calculateCompoundInterest = (principal: number, rate: number, years: number) => {
    return principal * Math.pow(1 + rate / 100, years);
  };
  