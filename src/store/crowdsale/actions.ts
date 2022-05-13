import { createAction } from '@reduxjs/toolkit';
import { GetSignatureActionPayload } from 'types';
import { crowdSaleActionTypes } from './actionTypes';

export const getCurrentStage = createAction(crowdSaleActionTypes.GET_CURRENT_STAGE);
export const buyToken = createAction<GetSignatureActionPayload>(crowdSaleActionTypes.BUY_TOKEN);
