import { TokenIdentifierValue } from '@elrondnetwork/erdjs/out';
import BigNumber from 'bignumber.js';
import { EContracts, MainToken } from 'config';
import { useElrondApi } from 'containers/ElrondAPI';
import { useInteraction } from 'containers/Interaction';
import { createContext, FC, useCallback, useContext, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { updateCrowdSaleStage, updateStageTimeLeft } from 'store/crowdsale';
import { setTokens } from 'store/tokens/reducer';
import { camelize, decimalNumber } from 'utils';

interface IContractContext {
  requestCurrentStage: () => Promise<void>;
  requestStageTimeLeft: () => Promise<void>;
  requestAllowedTokensMap: () => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestAllStages: () => Promise<any>;
  sendTransfer: () => Promise<void>;
  withdraw: (token: string) => Promise<void>;
}

const ContractContext = createContext<IContractContext>({} as IContractContext);

const ContractProvider:FC = ({ children }) => {
  const dispatch = useDispatch();

  const { callMethod, sendMethod } = useInteraction();
  const { getContractInfo } = useElrondApi();

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
    await sendMethod({ contract: EContracts.crowdSale, method: 'transfer_by_owner', args: [], token: MainToken.address, decimals: +MainToken.decimals, amount: decimalNumber({ value: new BigNumber(totalAmount), format: 'without' }).toString() });
  }, [requestAllStages, sendMethod]);

  const withdraw = useCallback(async (token) => {
    if(token) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await sendMethod({ contract: EContracts.crowdSale, method: 'withdraw', args: [new TokenIdentifierValue(token as any)] });
    }
  }, [sendMethod]);

  getContractInfo(EContracts.crowdSale).then((val) => console.log(val));

  const requestCurrentStage = useCallback(async () => {
    const { firstValue } = await callMethod({ contract: EContracts.crowdSale, method: 'stage', implementInterface: ['Adder'] });
    const normalizedValue = firstValue.valueOf();
    if(new BigNumber(normalizedValue?.stage_number).toNumber() === 6 && normalizedValue) {
      const [stages] = await requestAllStages();
      const stagesInfo = stages.slice(0, -1).map((stage) => {
        const [, stageInfo] = stage;
        return stageInfo;
      });
      const totalAmount = stagesInfo.reduce((acc, val) => acc.plus(val.left_tokens), new BigNumber(0));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(updateCrowdSaleStage({ totalTokens: totalAmount.plus(firstValue.valueOf().total_tokens), stageNumber: 6, leftTokens: totalAmount.plus(firstValue.valueOf().left_tokens) } as any));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(updateCrowdSaleStage(normalizedValue ? camelize(firstValue.valueOf() as any) as any : normalizedValue));
    }
  }, [callMethod, dispatch, requestAllStages]);

  const values = useMemo(() => ({ requestCurrentStage, withdraw, requestAllStages, requestStageTimeLeft, sendTransfer, requestAllowedTokensMap }), [requestCurrentStage, withdraw, sendTransfer, requestAllStages, requestStageTimeLeft, requestAllowedTokensMap]);

  return(
    <ContractContext.Provider value={values}>
      {children}
    </ContractContext.Provider>
  );
};

const useContractMethods = () => useContext(ContractContext);

export { ContractProvider, useContractMethods };
