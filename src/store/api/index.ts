import ajax from './ajax';

const apiURLs = {
  tokens: 'tokens/',
};

export const baseApi = {
  getAvailableTokens() {
    return ajax({
      method: 'get',
      url: apiURLs.tokens,
    });
  },
};
