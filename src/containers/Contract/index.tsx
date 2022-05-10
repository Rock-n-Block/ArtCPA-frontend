import { EContracts } from 'config';
import { useInteraction } from 'containers/Interaction';
import { createContext, FC, useCallback, useContext, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { updateCrowdSaleStage, updateStageTimeLeft } from 'store/crowdsale';
import { setTokens } from 'store/tokens/reducer';
import { camelize } from 'utils';

interface IContractContext {
  requestCurrentStage: () => Promise<void>;
  requestStageTimeLeft: () => Promise<void>;
  requestAllowedTokensMap: () => Promise<void>;
}

const ContractContext = createContext<IContractContext>({} as IContractContext);

const ContractProvider:FC = ({ children }) => {
  const dispatch = useDispatch();

  const { callMethod } = useInteraction();

  const requestCurrentStage = useCallback(async () => {
    const { firstValue } = await callMethod({ contract: EContracts.crowdSale, method: 'stage', implementInterface: ['Adder'] });
    const normalizedValue = firstValue.valueOf();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(updateCrowdSaleStage(normalizedValue ? camelize(firstValue.valueOf() as any) as any : normalizedValue));
  }, [callMethod, dispatch]);

  const requestStageTimeLeft = useCallback(async () => {
    const { firstValue } = await callMethod({ contract: EContracts.crowdSale, method: 'stage_left_time', implementInterface: ['Adder'] });
    const normalizedValue = firstValue.valueOf();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(updateStageTimeLeft(normalizedValue ? camelize(firstValue.valueOf() as any) as any : normalizedValue));
  }, [callMethod, dispatch]);

  const requestAllowedTokensMap = useCallback(async () => {
    const { values } = await callMethod({ contract: EContracts.crowdSale, method: 'allowed_tokens_map', implementInterface: ['Adder'] });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(setTokens(camelize(values.map((val) => val.valueOf()) as any) as any));
  }, [callMethod, dispatch]);

  const values = useMemo(() => ({ requestCurrentStage, requestStageTimeLeft, requestAllowedTokensMap }), [requestCurrentStage, requestStageTimeLeft, requestAllowedTokensMap]);

  return(
    <ContractContext.Provider value={values}>
      {children}
    </ContractContext.Provider>
  );
};

const useContractMethods = () => useContext(ContractContext);

export { ContractProvider, useContractMethods };
