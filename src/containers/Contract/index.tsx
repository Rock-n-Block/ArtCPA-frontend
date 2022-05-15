import { BytesValue } from '@elrondnetwork/erdjs/out';
import BigNumber from 'bignumber.js';
import { EContracts, MainToken } from 'config';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestAllStages: () => Promise<any>;
  sendTransfer: () => Promise<void>;
  withdraw: () => Promise<void>;
}

const ContractContext = createContext<IContractContext>({} as IContractContext);

const ContractProvider:FC = ({ children }) => {
  const dispatch = useDispatch();

  const { callMethod, sendMethod } = useInteraction();

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

  const requestAllStages = useCallback(async () => {
    const { values } = await callMethod({ contract: EContracts.crowdSale, method: 'stages', implementInterface: ['Adder'] });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return values.map((val) => val.valueOf());
  }, [callMethod]);

  const sendTransfer = useCallback(async () => {
    const [stages] = await requestAllStages();
    const stagesInfo = stages.map((stage) => {
      const [, stageInfo] = stage;
      return stageInfo;
    });
    const totalAmount = stagesInfo.reduce((acc, val) => acc.plus(val.total_tokens), new BigNumber(0));
    await sendMethod({ contract: EContracts.crowdSale, method: 'transfer_by_owner', args: [], token: MainToken.address, decimals: +MainToken.decimals, amount: totalAmount });
  }, [requestAllStages, sendMethod]);

  const withdraw = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await sendMethod({ contract: EContracts.crowdSale, method: 'withdraw', args: [new BytesValue(MainToken.address as any)] });
  }, [sendMethod]);

  const values = useMemo(() => ({ requestCurrentStage, withdraw, requestAllStages, requestStageTimeLeft, sendTransfer, requestAllowedTokensMap }), [requestCurrentStage, withdraw, sendTransfer, requestAllStages, requestStageTimeLeft, requestAllowedTokensMap]);

  return(
    <ContractContext.Provider value={values}>
      {children}
    </ContractContext.Provider>
  );
};

const useContractMethods = () => useContext(ContractContext);

export { ContractProvider, useContractMethods };
