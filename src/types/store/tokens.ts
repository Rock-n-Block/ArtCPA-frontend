import { BigNumber } from 'bignumber.js';

export type TSingleToken = {
  name: string,
  decimals: BigNumber,
};

export type TTokensState = {
  tokens: TSingleToken[],
};
