import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import BigNumber from 'bignumber.js';
import { Button } from 'components';
import { EContracts } from 'config';
import { useContractMethods, useElrondApi } from 'containers';
import { useEffect, VFC, useState, useMemo } from 'react';
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
  const { getContractInfo } = useElrondApi();
  const { requestAllStages, sendTransfer, withdraw } = useContractMethods();
  const { address } = useGetAccountInfo();

  useEffect(() => {
    getContractInfo(EContracts.crowdSale).then((data) => {
      if(data) {
        const { ownerAddress, balance } = data.data.account;
        setIsOwner(address === ownerAddress);
        setBalance(balance);
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
  }, [address, getContractInfo, requestAllStages]);

  const isTransferActive = useMemo(() => new BigNumber(balance).isEqualTo(totalAmount) || stage == null, [balance, stage, totalAmount]);

  if(!isOwner) {
    return null;
  }

  return(
    <div className={styles.wrapper}>
      <Button disabled={isTransferActive} onClick={sendTransfer}>Transfer tokens</Button>
      <Button disabled={Boolean(stage)} onClick={withdraw}>Collect</Button>
    </div>
  );
};
