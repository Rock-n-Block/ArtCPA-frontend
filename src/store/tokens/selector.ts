import type { State, TTokensState } from 'types';

const tokensSelector = {
  geTCrowdSaleState: (state: State): TTokensState => state.tokens,
  getProp: <T extends keyof TTokensState>(propKey: T) => (state: State) => state.tokens[propKey],
};

export default tokensSelector;
