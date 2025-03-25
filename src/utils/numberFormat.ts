// utils/numberFormat.ts
export const formatNumber = (value: number | string) => {
    if (value === null || value === undefined || value === '') return '';
    const num = typeof value === 'string' ? value.replace(/[^0-9]/g, '') : value;
    return parseInt(num.toString()).toLocaleString();
  };
  
  export const unformatNumber = (value: string) => {
    return Number(value.replace(/,/g, '') || 0);
  };
  