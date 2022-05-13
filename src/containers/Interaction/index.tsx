import { useGetAccountInfo, useGetNetworkConfig, sendTransactions, useSignTransactions } from '@elrondnetwork/dapp-core';
import { ApiNetworkProvider, ProxyNetworkProvider } from '@elrondnetwork/erdjs-network-providers/out';
import { Account, Address, ContractFunction, ResultsParser, SmartContract, SmartContractAbi, TokenPayment, TypedOutcomeBundle, TypedValue } from '@elrondnetwork/erdjs/out';
import { nativeCurrency } from 'appConstants/tokens';
import { contracts, EContracts } from 'config';
import { createContext, FC, useContext, useCallback, useMemo, useRef } from 'react';

export type TCallMethodProperties = {
  contract: EContracts,
  method: string,
  args?: TypedValue[],
  implementInterface?: string[],
  token?: string;
  amount?: string;
  decimals?: number;
};

export type TSendMethodProperties = {
  callerAddress?: string;
} & TCallMethodProperties;

type TCallMethod = (values: TCallMethodProperties) => Promise<TypedOutcomeBundle>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TSendMethod = (values: TSendMethodProperties) => Promise<any>;

interface IInteractionContext {
  callMethod: TCallMethod;
  canMakeCallRequest: boolean;
  sendMethod: TSendMethod;
  canMakeSendRequest: boolean;
  currentProvider: ProxyNetworkProvider;
  currentApiProvider: ApiNetworkProvider;
}

const InteractionContext = createContext<IInteractionContext>({} as IInteractionContext);

const InteractionProvider: FC = ({ children }) => {
  const { address: userAddress } = useGetAccountInfo();
  const { network: { apiAddress } } = useGetNetworkConfig();
  useSignTransactions();

  const currentProvider = useRef(new ProxyNetworkProvider(apiAddress)).current;
  const currentApiProvider = useRef(new ApiNetworkProvider(apiAddress)).current;

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

  const sendMethod = useCallback<TSendMethod>(async ({ contract, method, args = [], implementInterface = [], callerAddress = userAddress, token, amount, decimals }) => {
    if(canMakeCallRequest) {
      try{
        const { address, abi } = contracts[contract];
        const contractAddress = new Address(address);
        const contractAbi = new SmartContractAbi(abi, implementInterface);
        const appliedContract = new SmartContract({ address: contractAddress, abi: contractAbi });

        const userAccount = new Account(new Address(callerAddress));

        const isNativePayment = nativeCurrency.includes(token);

        const tx = appliedContract.methodsExplicit[method](args).withNonce(userAccount.nonce).withGasLimit(600000000).withValue(TokenPayment.egldFromAmount(isNativePayment ? amount : 0))
          .withChainID('T');

        if(!isNativePayment) {
          tx.withSingleESDTTransfer(TokenPayment.fungibleFromAmount(token, amount, decimals));
        }

        const fullTransaction = tx.buildTransaction();

        const { sessionId } = await sendTransactions({
          transactions: [fullTransaction],
        });

        return sessionId;
      } catch(e) {
        return null;
      }
    }
    return null;
  }, [canMakeCallRequest, userAddress]);

  const values = useMemo(() => ({ callMethod, canMakeCallRequest, sendMethod, canMakeSendRequest, currentProvider, currentApiProvider }), [callMethod, sendMethod, canMakeCallRequest, canMakeSendRequest, currentProvider, currentApiProvider]);

  return(
    <InteractionContext.Provider value={values}>
      {children}
    </InteractionContext.Provider>
  );
};

const useInteraction = () => useContext(InteractionContext);

export { useInteraction, InteractionProvider };
