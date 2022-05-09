import { TCrowdSaleStateStage } from 'types/store/crowdsale';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BigNumber from 'bignumber.js';

import { TCrowdSaleState } from 'types';

const initialState: TCrowdSaleState = {
  stage: {
    stageNumber: new BigNumber(0),
    totalTokens: new BigNumber(0),
    leftTokens: new BigNumber(0),
  },
  stageTimeLeft: new BigNumber(0),
};

export const crowdSaleReducer = createSlice({
  name: 'crowdSale',
  initialState,
  reducers: {
    updateCrowdSaleState: (state, action: PayloadAction<Partial<TCrowdSaleState>>) => ({
      ...state,
      ...action.payload,
    }),
    updateCrowdSaleStage: (state, action: PayloadAction<TCrowdSaleStateStage>) => ({
      ...state,
      stage: action.payload,
    }),
    updateStageTimeLeft: (state, action: PayloadAction<BigNumber>) => ({
      ...state,
      stageTimeLeft: action.payload,
    }),
  },
});

export const { updateCrowdSaleState, updateCrowdSaleStage, updateStageTimeLeft } = crowdSaleReducer.actions;

export default crowdSaleReducer.reducer;
