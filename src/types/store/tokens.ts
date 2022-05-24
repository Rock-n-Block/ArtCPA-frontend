import { ReactElement } from 'react';

export type TSingleToken = {
  symbol: string,
  address: string,
  decimals: string,
  price: string,
};

export type TSingleTokenWithIcon = {
  icon: ReactElement
} & TSingleToken;

export type TTokensState = {
  tokens: TSingleToken[],
};
