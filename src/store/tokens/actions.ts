import { createAction } from '@reduxjs/toolkit';
import { tokensActionTypes } from './actionTypes';

export const getAvailableTokens = createAction(tokensActionTypes.GET_AVAILABLE_TOKENS);
