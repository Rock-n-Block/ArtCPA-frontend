import { useGetAccountInfo, useGetNetworkConfig } from '@elrondnetwork/dapp-core';
import { ProxyNetworkProvider } from '@elrondnetwork/erdjs-network-providers/out';
import { Address, ContractFunction, ResultsParser, SmartContract, SmartContractAbi, TypedOutcomeBundle, TypedValue } from '@elrondnetwork/erdjs/out';
import { contracts, EContracts } from 'config';
import { createContext, FC, useContext, useCallback, useMemo, useRef } from 'react';

export type TCallMethodProperties = {
  contract: EContracts,
  method: string,
  args?: TypedValue[],
  implementInterface?: string[],
};

type TCallMethod = (values: TCallMethodProperties) => Promise<TypedOutcomeBundle>;
type TSendMethod = () => void;

interface IInteractionContext {
  callMethod: TCallMethod;
  canMakeCallRequest: boolean;
  sendMethod: TSendMethod;
  canMakeSendRequest: boolean;
  currentProvider: ProxyNetworkProvider;
}

const InteractionContext = createContext<IInteractionContext>({} as IInteractionContext);

const InteractionProvider: FC = ({ children }) => {
  const { address: userAddress } = useGetAccountInfo();
  const { network: { apiAddress } } = useGetNetworkConfig();

  const currentProvider = useRef(new ProxyNetworkProvider(apiAddress)).current;

  const canMakeCallRequest = useMemo(() => Boolean(apiAddress), [apiAddress]);
  const canMakeSendRequest = useMemo(() => Boolean(canMakeCallRequest && userAddress), [canMakeCallRequest, userAddress]);

  const callMethod = useCallback<TCallMethod>(async ({ contract, method, args = [], implementInterface = [] }) => {
    if(canMakeCallRequest) {
      const { address, abi } = contracts[contract];
      const contractAddress = new Address(address);
      const contractAbi = new SmartContractAbi(abi, implementInterface);
      const appliedContract = new SmartContract({ address: contractAddress, abi: contractAbi });

      const query = appliedContract.createQuery({
        func: new ContractFunction(method),
        args,
      });

      const proxyProvider = currentProvider;
      const queryResponse = await proxyProvider.queryContract(query);

      const resultsParser = new ResultsParser();
      const endpointDefinition = appliedContract.getEndpoint(method);

      const result = resultsParser.parseQueryResponse(queryResponse, endpointDefinition);
      return result;
    }
    return null;
  }, [canMakeCallRequest, currentProvider]);

  const sendMethod = useCallback<TSendMethod>(() => {}, []);

  const values = useMemo(() => ({ callMethod, canMakeCallRequest, sendMethod, canMakeSendRequest, currentProvider }), [callMethod, sendMethod, canMakeCallRequest, canMakeSendRequest, currentProvider]);

  return(
    <InteractionContext.Provider value={values}>
      {children}
    </InteractionContext.Provider>
  );
};

const useInteraction = () => useContext(InteractionContext);

export { useInteraction, InteractionProvider };
