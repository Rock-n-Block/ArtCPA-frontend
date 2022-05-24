import { MainToken } from 'config/index';
import { BigNumber } from 'bignumber.js';

const { decimals: mainDecimals } = MainToken;
const BIG_TEN = new BigNumber(10);

export const withDecimals = (value: BigNumber, decimals = new BigNumber(mainDecimals)) => {
  return value.multipliedBy(BIG_TEN.pow(decimals));
};

export const withoutDecimals = (value: BigNumber, decimals = new BigNumber(mainDecimals)) => {
  return value.dividedBy(BIG_TEN.pow(decimals));
};

type TDecimalNumberProperties = {
  value: BigNumber,
  decimals?: BigNumber,
  format?: 'with' | 'without',
};

export const decimalNumber = ({ value, decimals, format = 'without' }: TDecimalNumberProperties) => {
  switch (format) {
    case 'with': {
      return withDecimals(value, decimals);
    }
    case 'without': {
      return withoutDecimals(value, decimals);
    }
    default: {
      return value;
    }
  }
};
