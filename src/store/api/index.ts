import { GetSignatureRequest } from 'types';
import { snakeize } from 'utils/camelize';
import ajax from './ajax';

const apiURLs = {
  tokens: 'tokens/',
  stage: 'stage/',
  signature: 'signature/',
};

export const baseApi = {
  getAvailableTokens() {
    return ajax({
      method: 'get',
      url: apiURLs.tokens,
    });
  },
  getCurrentStage() {
    return ajax({
      method: 'get',
      url: apiURLs.stage,
    });
  },
  getSignature(data: GetSignatureRequest) {
    return ajax({
      method: 'post',
      url: apiURLs.signature,
      data: snakeize(data),
    });
  },
};
