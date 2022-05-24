import { TSingleToken } from 'types/store/tokens';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCrowdSaleState, TTokensState } from 'types';

const initialState: TTokensState = {
  tokens: [],
};

export const tokensReducer = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    updateTokensState: (state, action: PayloadAction<Partial<TCrowdSaleState>>) => ({
      ...state,
      ...action.payload,
    }),
    addToken: (state, action: PayloadAction<TSingleToken>) => ({
      ...state,
      tokens: [...state.tokens, action.payload],
    }),
    setTokens: (state, action: PayloadAction<TSingleToken[]>) => ({
      ...state,
      tokens: action.payload,
    }),
  },
});

export const { updateTokensState, addToken, setTokens } = tokensReducer.actions;

export default tokensReducer.reducer;
