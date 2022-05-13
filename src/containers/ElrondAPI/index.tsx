import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { useInteraction } from 'containers/Interaction';
import { createContext, FC, useCallback, useContext, useMemo } from 'react';

const apiEndpoints = {
  getAddressTokens: 'accounts/{address}/tokens',
  getAddressNFTs: 'accounts/{address}/nfts',
};

const replaceVariables = (endpoint: string, values: {[key:string]: string | number}) => {
  let modifiedEndpoint = endpoint;
  Object.entries(values).forEach(([key, value]) => {
    modifiedEndpoint = modifiedEndpoint.replaceAll(`{${key}}`, value.toString());
  });
  return modifiedEndpoint;
};

interface IElrondApiContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAccountsTokens: (address?: string) => Promise<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAccountsNFTs: (address?: string) => Promise<any>,
}

const ElrondApiContext = createContext<IElrondApiContext>({} as IElrondApiContext);

const ElrondApiProvider: FC = ({ children }) => {
  const { currentApiProvider } = useInteraction();
  const { address: userAddress } = useGetAccountInfo();

  const getAccountsTokens = useCallback(async (address = userAddress) => {
    const response = await currentApiProvider.doGetGeneric(replaceVariables(apiEndpoints.getAddressTokens, { address }));
    return response;
  }, [currentApiProvider, userAddress]);

  const getAccountsNFTs = useCallback(async (address = userAddress) => {
    const response = await currentApiProvider.doGetGeneric(replaceVariables(apiEndpoints.getAddressNFTs, { address }));
    return response;
  }, [currentApiProvider, userAddress]);

  const values = useMemo(() => ({ getAccountsTokens, getAccountsNFTs }), [getAccountsTokens, getAccountsNFTs]);

  return (
    <ElrondApiContext.Provider value={values}>
      {children}
    </ElrondApiContext.Provider>
  );
};

const useElrondApi = () => useContext(ElrondApiContext);

export { ElrondApiProvider, useElrondApi };
