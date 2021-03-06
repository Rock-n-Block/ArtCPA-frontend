import type { Dispatch as DispatchReact } from 'react';
import { TCrowdSaleState } from './crowdsale';
import { ModalsInitialState } from './modals';
import { TTokensState } from './tokens';
import { UserState } from './user';

export * from './user';
export * from './crowdsale';
export * from './ui';
export * from './modals';
export * from './tokens';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action<T, P = any, M = void> = { type: T; payload?: P; meta?: M };
export type Dispatch = DispatchReact<{ type: string }>;

export type State = {
  user: UserState;
  modals: ModalsInitialState;
  crowdSale: TCrowdSaleState,
  tokens: TTokensState,
};
