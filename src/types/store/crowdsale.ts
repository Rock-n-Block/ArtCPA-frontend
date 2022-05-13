import { BigNumber } from 'bignumber.js';
import { Nullable } from 'types';

export type TCrowdSaleStateStage = {
  stageNumber: BigNumber,
  totalTokens: BigNumber,
  leftTokens: BigNumber,
};

export type TCrowdSaleStageLimit = {
  minimum: BigNumber,
  maximum: BigNumber,
};

export type TCrowdSaleState = {
  stage: Nullable<TCrowdSaleStateStage>,
  stageTimeLeft: Nullable<BigNumber>,
  stageTokenPrice: Nullable<BigNumber>,
  stageLimits: TCrowdSaleStageLimit,
};
