export type BodyWithToken<T = never> = {
  token?: string;
} & T;

export type LoginReq = {
  address: string;
};

export type ApiResponse<T = never> = {
  data: BodyWithToken<T>;
  statusCode?: number;
  error?: string;
  message?: string | string[];
};

export type GetTokenBalanceReq = {
};

export type UpdateUserInfoReq = {
};

export type ApproveReq = {
  amount: string;
  spender: string;
  tokenAddress: string;
};
