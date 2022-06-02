import BigNumber from 'bignumber.js/bignumber';
import { MainToken } from 'config';

export const convertEsdtToWei = (v: number, decimals = +MainToken.decimals) => {
  const factor = 10 ** decimals;
  return (new BigNumber(v)).multipliedBy(factor);
};

export const convertWeiToEsdt = (v: any, decimals = +MainToken.decimals, precision = 2) => {
  // conversion for BigNumber operation
  let value;
  if (typeof (v) !== typeof (BigNumber)) {
    value = new BigNumber(v);
  } else {
    value = v;
  }

  const number = value.dividedBy(new BigNumber(10 ** decimals)).toNumber();
  const factor = 10 ** precision;
  return Math.floor(number * factor) / factor;
};

export const formatNumbers = (v: number, precision = 2) => {
  const factor = 10 ** precision;
  const number = Math.floor(v * factor) / factor;
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number);
};

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function formatDate(date: Date) {
  return [
    date.toLocaleString('default', { month: 'long' }),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join(' ');
}

export const convertTimestampToDate = (ts: number) => {
  const date = new Date(ts);
  return formatDate(date);
};
