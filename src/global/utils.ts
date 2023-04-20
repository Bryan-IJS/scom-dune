export const formatNumber = (num: number, options?: { format?: string, decimals?: number, percentValues?: boolean }) => {
  if (num === null) return '-';
  const { decimals, format, percentValues } = options || {};
  if (percentValues) {
    return `${num.toFixed(2)}%`;
  }
  if (format) {
    return formatNumberByFormat(num, format);
  }
  const absNum = Math.abs(num);
  if (absNum >= 1000000000) {
    return (num / 1000000000).toFixed(decimals || 3) + 'B';
  }
  if (absNum >= 1000000) {
    return (num / 1000000).toFixed(decimals || 3) + 'M';
  }
  if (absNum >= 1000) {
    return (num / 1000).toFixed(decimals || 3) + 'K';
  }
  if (absNum < 0.0000001) {
    return num.toFixed();
  }
  if (absNum < 0.00001) {
    return num.toFixed(6);
  }
  if (absNum < 0.001) {
    return num.toFixed(4);
  }
  return num.toFixed(2);
}

export const formatNumberByFormat = (num: number, format: string) => {
  const separator = format.indexOf(",") !== -1 ? "," : ".";
  const decimalSeparator = format.indexOf(".") !== -1 ? "." : ",";
  const currencySymbol = format.indexOf("$") !== -1 ? "$" : "";
  const decimalPlaces = format.split(".")[1] ? format.split(".").length : 0;

  const roundedNum = num.toFixed(decimalPlaces);
  const parts = roundedNum.split(".");
  const integerPart = parts[0];
  const decimalPart = parts.length > 1 ? parts[1] : "";

  const integerWithSeparator = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return currencySymbol + integerWithSeparator + (decimalPart ? decimalSeparator + decimalPart.slice(0, decimalPlaces) : "");
}

export const getChartType = (type: string, defaultType?: string) => {
  switch (type) {
    case 'area':
      return 'line';
    case 'column':
      return 'bar';
    default:
      return type || defaultType;
  }
}