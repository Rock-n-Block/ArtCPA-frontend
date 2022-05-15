import { useGetAccountInfo, useGetNetworkConfig } from '@elrondnetwork/dapp-core';
import axios from 'axios';
import { EContracts, getContract } from 'config';
import { useInteraction } from 'containers/Interaction';
import { createContext, FC, useCallback, useContext, useMemo } from 'react';

const apiEndpoints = {
  getAddressTokens: 'accounts/{address}/tokens',
  getAddressNFTs: 'accounts/{address}/nfts',
};

const blockChainEndpoints = {
  getAddressInfo: 'address/{address}',
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
}

const ElrondApiContext = createContext<IElrondApiContext>({} as IElrondApiContext);

const ElrondApiProvider: FC = ({ children }) => {
  const { currentApiProvider } = useInteraction();
  const { address: userAddress } = useGetAccountInfo();

  const { network: { id } } = useGetNetworkConfig();

  const blockChainProxy = `https://${id}-gateway.elrond.com`;

  const getAccountsTokens = useCallback(async (address = userAddress) => {
    const response = await currentApiProvider.doGetGeneric(replaceVariables(apiEndpoints.getAddressTokens, { address }));
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

  const values = useMemo(() => ({ getAccountsTokens, getAccountsNFTs, getContractInfo }), [getAccountsTokens, getAccountsNFTs, getContractInfo]);

  return (
    <ElrondApiContext.Provider value={values}>
      {children}
    </ElrondApiContext.Provider>
  );
};

const useElrondApi = () => useContext(ElrondApiContext);

export { ElrondApiProvider, useElrondApi };
