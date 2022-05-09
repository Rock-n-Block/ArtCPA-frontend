import { TCrowdSaleStage } from 'types/store/crowdsale';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BigNumber from 'bignumber.js';

import { TCrowdSale } from 'types';

const initialState: TCrowdSale = {
  stage: {
    stageNumber: 0,
    totalTokens: new BigNumber(0),
    leftTokens: new BigNumber(0),
  },
};

export const crowdSaleReducer = createSlice({
  name: 'crowdSale',
  initialState,
  reducers: {
    updateCrowdSaleState: (state, action: PayloadAction<Partial<TCrowdSale>>) => ({
      ...state,
      ...action.payload,
    }),
    updateCrowdSaleStage: (state, action: PayloadAction<TCrowdSaleStage>) => ({
      ...state,
      stage: action.payload,
    }),
  },
});

export const { updateCrowdSaleState, updateCrowdSaleStage } = crowdSaleReducer.actions;

export default crowdSaleReducer.reducer;
