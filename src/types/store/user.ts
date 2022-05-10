export type TSingleUserToken = {
  balance: string,
  decimals: string,
  identifier: string,
  isPause: boolean,
  name: string,
};

export type UserState = {
  address: string;
  balance: string | number;
  tokens: TSingleUserToken[];
};
