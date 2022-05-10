import { TSingleUserToken } from 'types/store/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from 'types';

const initialState: UserState = {
  address: '',
  balance: 0,
  key: '',
  tokens: [],
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<Partial<UserState>>) => ({
      ...state,
      ...action.payload,
    }),
    updateUserTokens: (state, action: PayloadAction<TSingleUserToken[]>) => ({
      ...state,
      tokens: action.payload,
    }),
    disconnectWalletState: () => {
      localStorage.removeItem('walletconnect');
      return {
        ...initialState,
      };
    },
  },
});

export const { disconnectWalletState, updateUserState, updateUserTokens } = userReducer.actions;

export default userReducer.reducer;
