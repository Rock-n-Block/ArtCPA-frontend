import { BigNumber } from 'bignumber.js';

export type TCrowdSaleStage = {
  stageNumber: number,
  totalTokens: BigNumber,
  leftTokens: BigNumber,
};

export type TCrowdSale = {
  stage: TCrowdSaleStage
};
