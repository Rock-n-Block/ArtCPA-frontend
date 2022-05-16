import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import BigNumber from 'bignumber.js';
import { Button } from 'components';
import { EContracts } from 'config';
import { useContractMethods, useElrondApi } from 'containers';
import { useEffect, VFC, useState, useMemo, useCallback } from 'react';
import { TCrowdSaleStateStage } from 'types';

import styles from './styles.module.scss';

interface IOwnerMenu{
  stage: TCrowdSaleStateStage;
}

export const OwnerMenu:VFC<IOwnerMenu> = ({ stage }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOwner, setIsOwner] = useState(false);
  const [balance, setBalance] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const { getContractInfo, getContractBalance } = useElrondApi();
  const { requestAllStages, sendTransfer, withdraw } = useContractMethods();
  const { address } = useGetAccountInfo();
  const [availableCollects, setAvailableCollects] = useState([]);

  const requestData = useCallback(async () => {
    const balances = await getContractBalance(EContracts.crowdSale);
    const contractData = await getContractInfo(EContracts.crowdSale);
    let withNative = false;
    if(contractData.data?.account.balance !== '0') {
      withNative = true;
    }
    const mappedRequests = [...Object.entries(balances.data.esdts).map(([key]) => key), ...(withNative ? ['EGLD'] : [])];
    setAvailableCollects(mappedRequests);
  }, [getContractBalance, getContractInfo]);

  useEffect(() => {
    getContractInfo(EContracts.crowdSale).then((data) => {
      if(data) {
        const { ownerAddress, balance } = data.data.account;
        setIsOwner(address === ownerAddress);
        setBalance(balance);
        requestData();
        requestAllStages().then(([stages]) => {
          const stagesInfo = stages.map((stage) => {
            const [, stageInfo] = stage;
            return stageInfo;
          });
          const totalAmount = stagesInfo.reduce((acc, val) => acc.plus(val.total_tokens), new BigNumber(0));
          setTotalAmount(totalAmount.toString());
        });
      }
    });
  }, [address, getContractInfo, requestAllStages, requestData]);

  const onCollectClick = useCallback(async (token: string) => {
    await withdraw(token);
    await requestData();
  }, [requestData, withdraw]);

  const isTransferActive = useMemo(() => new BigNumber(balance).isEqualTo(totalAmount) || stage == null, [balance, stage, totalAmount]);

  if(!isOwner) {
    return null;
  }

  return(
    <div className={styles.wrapper}>
      <Button disabled={isTransferActive} onClick={sendTransfer}>Transfer tokens</Button>
      <div className={styles.collect}>
        {availableCollects.map((token) => <Button disabled={Boolean(stage)} onClick={() => onCollectClick(token)}>Collect {token}</Button>)}
      </div>
    </div>
  );
};
