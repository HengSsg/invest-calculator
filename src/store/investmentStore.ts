import { create } from 'zustand';

interface InvestmentState {
  principal: number;
  rate: number;
  years: number;
  result: number;
  setPrincipal: (val: number) => void;
  setRate: (val: number) => void;
  setYears: (val: number) => void;
  setResult: (val: number) => void;
}

export const useInvestmentStore = create<InvestmentState>((set) => ({
  principal: 1000000,
  rate: 5,
  years: 10,
  result: 0,
  setPrincipal: (val) => set({ principal: val }),
  setRate: (val) => set({ rate: val }),
  setYears: (val) => set({ years: val }),
  setResult: (val) => set({ result: val }),
}));
