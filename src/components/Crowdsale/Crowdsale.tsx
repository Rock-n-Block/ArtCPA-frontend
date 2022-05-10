import { useState, VFC, useCallback, useMemo } from 'react';

import { HomePageAnchors } from 'containers/Header/Header.helpers';
import cn from 'clsx';
import { H1, H2, Text, Button } from 'components';
import { Input } from 'components/Input';
import { ProgressBar } from 'components/ProgressBar';
import { WrapContainer } from 'components/WrapContainer';
import { Countdown } from 'components/Countdown';
import { SelectCurrency } from 'components/SelectCurrency';
import { CRU, Coin } from 'assets/icons/icons';
import { useShallowSelector } from 'hooks';
import crowdSaleSelector from 'store/crowdsale/selector';
import BigNumber from 'bignumber.js';
import { decimalNumber } from 'utils';
import { MainToken } from 'config';
import userSelector from 'store/user/selectors';
import styles from './styles.module.scss';

export interface CrowdsaleProps {
  className?: string;
}

export const Crowdsale: VFC<CrowdsaleProps> = ({ className }) => {
  const [sendInput, setSendInput] = useState('');
  const [receiveInput, setReceiveInput] = useState('');
  const [select, setSelect] = useState({
    value: 'CRU',
    label: 'CRU',
    icon: <CRU />,
  });

  const stage = useShallowSelector(crowdSaleSelector.getProp('stage'));
  const stageTimeLeft = useShallowSelector(crowdSaleSelector.getProp('stageTimeLeft'));
  const userTokens = useShallowSelector(userSelector.getProp('tokens'));

  const handleChangeSendInput = useCallback((event) => {
    setSendInput(event.target.value);
  }, []);

  const handleChangeReceiveInput = useCallback((event) => {
    setReceiveInput(event.target.value);
  }, []);

  const handleChangeSelect = useCallback((event) => {
    setSelect(event);
  }, []);

  const tokensBought = useMemo(() => {
    if(stage) {
      const { leftTokens, totalTokens } = stage;
      return decimalNumber({ value: totalTokens.minus(leftTokens) });
    }
    return new BigNumber(0);
  }, [stage]);

  const stageEndTimestamp = useMemo(() => {
    if(stageTimeLeft) {
      return stageTimeLeft.plus(Date.now() / 1000).toNumber();
    }
    return 0;
  }, [stageTimeLeft]);

  const mainTokenBalance = useMemo(() => {
    // TODO make search by identifier
    const mainTokenInfo = userTokens.find((token) => token.name === MainToken.name);
    if(mainTokenInfo) {
      return decimalNumber({ value: new BigNumber(mainTokenInfo.balance) });
    }
    return new BigNumber(0);
  }, [userTokens]);

  const payableTokenBalance = useMemo(() => {
    // TODO make search by identifier
    const payableTokenInfo = userTokens.find((token) => token.name === select.value);
    if(payableTokenInfo) {
      return decimalNumber({ value: new BigNumber(payableTokenInfo.balance), decimals: new BigNumber(payableTokenInfo.decimals) });
    }
    return new BigNumber(0);
  }, [select.value, userTokens]);

  return (
    <WrapContainer name={HomePageAnchors.BUY} className={styles.smainWrapper}>
      <H1 align="center" className={styles.mainTitle} weight="bold">Crowdsale</H1>
      <div className={cn(styles.crowdsale, className)}>
        <H2 align="center" className={styles.title} weight="semiBold">{stage ? `${stage.stageNumber.toString()} stage is live!` : `${MainToken.name} crowdsale is over`}</H2>
        {stage && (
        <>
          <Countdown endAuction={stageEndTimestamp} auctionEndText="endAuction" />
          <Text>{MainToken.name} tokens available:</Text>
          <ProgressBar
            text={decimalNumber({ value: stage.totalTokens }).toString()}
            className={styles.progressBar}
            maxValue={decimalNumber({ value: stage.totalTokens }).toNumber()}
            currentValue={decimalNumber({ value: tokensBought }).toNumber()}
          />
          <div className={styles.purchaseAmount}>
            <Text noWrap={false} className={styles.purschAmount}>Minimal purchase amount: <Text>1 500 {select.value}</Text></Text>
            <Text noWrap={false} align="right" className={styles.purschAmount}>Max purchase amount: <Text align="right">1 500 {select.value}</Text></Text>
          </div>
          <div className={styles.wrapInputWithSelect}>
            <Input
              name="send"
              value={sendInput}
              onChange={handleChangeSendInput}
              className={styles.inputs}
              placeholder="Send"
            />
            <SelectCurrency
              className={styles.selects}
              onChange={handleChangeSelect}
              value={select}
            />
          </div>
          <div className={styles.textUnderUnput}>
            <Text color="secondary" noWrap={false}>Your {select.value} balance {payableTokenBalance.toString()} {select.value}</Text>
            <Text color="secondary">1 {select.value} = 160$</Text>
          </div>
          <div className={styles.wrapInputWithSelect}>
            <Input
              name="receive"
              className={styles.inputs}
              placeholder="Receive"
              value={receiveInput}
              onChange={handleChangeReceiveInput}
            />
            <Button size="sm" variant="filled-secondary" startAdorment={<Coin width="30" height="30" />} className={styles.CPAbtn}>{MainToken.name}</Button>
          </div>
          <div className={styles.textUnderUnput}>
            <Text color="secondary" noWrap={false}>Your {MainToken.name} balance {mainTokenBalance.toString()} {MainToken.name}</Text>
            <Text color="secondary">1 {MainToken.name} = 0.04$</Text>
          </div>
          <div className={styles.buyInfo}>
            <Text noWrap={false} align="center">You buy ArtCPAclub Tokens by sending {select.value} to the contract</Text>
          </div>
          <Button variant="filled" className={styles.buyButton} size="md">BUY {MainToken.name}</Button>
        </>
        )}
      </div>
    </WrapContainer>
  );
};
