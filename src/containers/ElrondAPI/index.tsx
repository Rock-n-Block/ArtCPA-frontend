import { useGetAccountInfo, useGetNetworkConfig } from '@elrondnetwork/dapp-core';
import axios from 'axios';
import { EContracts, getContract } from 'config';
import { useInteraction } from 'containers/Interaction';
import { createContext, FC, useCallback, useContext, useMemo } from 'react';

const apiEndpoints = {
  getAddressTokens: 'accounts/{address}/tokens',
  getAddressTokensCount: 'accounts/{address}/tokens/count',
  getAddressNFTs: 'accounts/{address}/nfts',
};

const blockChainEndpoints = {
  getAddressInfo: 'address/{address}',
};

const buildUrlWithQueryParameters = (endpoint: string, params: Record<string, string>):string => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => value && searchParams.append(key, value));
  return `${endpoint}?${searchParams.toString()}`;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getContractInfo: (contract: EContracts) => Promise<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getContractBalance: (contract: EContracts) => Promise<any>
}

const ElrondApiContext = createContext<IElrondApiContext>({} as IElrondApiContext);

const ElrondApiProvider: FC = ({ children }) => {
  const { currentApiProvider } = useInteraction();
  const { address: userAddress } = useGetAccountInfo();

  const { network: { id } } = useGetNetworkConfig();

  const blockChainProxy = `https://${id === 'mainnet' ? '' : `${id}-`}gateway.elrond.com`;

  const getAccountsTokens = useCallback(async (address = userAddress) => {
    const responseAmount = await currentApiProvider.doGetGeneric(replaceVariables(apiEndpoints.getAddressTokensCount, { address }));
    const response = await currentApiProvider.doGetGeneric(buildUrlWithQueryParameters(replaceVariables(apiEndpoints.getAddressTokens, { address }), { from: '0', size: responseAmount }));
    return response;
  }, [currentApiProvider, userAddress]);

  const getAccountsNFTs = useCallback(async (address = userAddress) => {
    if(address) {
      const response = await currentApiProvider.doGetGeneric(replaceVariables(apiEndpoints.getAddressNFTs, { address }));
      return response;
    }
    return [];
  }, [currentApiProvider, userAddress]);

  const getContractInfo = useCallback(async (contract: EContracts) => {
    const reqContract = getContract(contract);
    const data = await axios.get(`${blockChainProxy}/${replaceVariables(blockChainEndpoints.getAddressInfo, { address: reqContract.address })}`);
    if(data.status === 200) {
      return data.data;
    }
    return null;
  }, [blockChainProxy]);

  const getContractBalance = useCallback(async (contract: EContracts) => {
    const reqContract = getContract(contract);
    const data = await axios.get(`${blockChainProxy}/${replaceVariables(blockChainEndpoints.getAddressInfo, { address: reqContract.address })}/esdt`);
    if(data.status === 200) {
      return data.data;
    }
    return null;
  }, [blockChainProxy]);

  const values = useMemo(() => ({ getAccountsTokens, getAccountsNFTs, getContractInfo, getContractBalance }), [getAccountsTokens, getAccountsNFTs, getContractInfo, getContractBalance]);

  return (
    <ElrondApiContext.Provider value={values}>
      {children}
    </ElrondApiContext.Provider>
  );
};

const useElrondApi = () => useContext(ElrondApiContext);

export { ElrondApiProvider, useElrondApi };
