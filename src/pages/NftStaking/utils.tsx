import BigNumber from 'bignumber.js/bignumber';
import { MainToken } from 'config';

export const convertEsdtToWei = (v: number, decimals = +MainToken.decimals) => {
  const factor = 10 ** decimals;
  return (new BigNumber(v)).multipliedBy(factor);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: precision, maximumFractionDigits: precision }).format(number);
};

export function zeroPadStringIfOddLength(input = '') {
  if (input.length % 2 === 1) {
    return `0${input}`;
  }

  return input;
}
