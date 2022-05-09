import { useState, VFC, useCallback } from 'react';

import { HomePageAnchors } from 'containers/Header/Header.helpers';
import cn from 'clsx';
import { H1, H2, Text, Button } from 'components';
import { Input } from 'components/Input';
import { ProgressBar } from 'components/ProgressBar';
import { WrapContainer } from 'components/WrapContainer';
import { Countdown } from 'components/Countdown';
import { SelectCurrency } from 'components/SelectCurrency';
import { CRU, Coin } from 'assets/icons/icons';
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

  const handleChangeSendInput = useCallback((event) => {
    setSendInput(event.target.value);
  }, []);

  const handleChangeReceiveInput = useCallback((event) => {
    setReceiveInput(event.target.value);
  }, []);

  const handleChangeSelect = useCallback((event) => {
    setSelect(event);
  }, []);

  return (
    <WrapContainer name={HomePageAnchors.BUY} className={styles.smainWrapper}>
      <H1 align="center" className={styles.mainTitle} weight="bold">Crowdsale</H1>
      <div className={cn(styles.crowdsale, className)}>
        <H2 align="center" className={styles.title} weight="semiBold">2nd stage is live!</H2>
        <Countdown endAuction={1800000000} auctionEndText="endAuction" />
        <Text>CPA tokens available:</Text>
        <ProgressBar
          text="45 000 000 000"
          className={styles.progressBar}
          maxValue={45000000000}
          currentValue={18000000000}
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
          <Text color="secondary" noWrap={false}>Your {select.value} balance 10000 {select.value}</Text>
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
          <Button size="sm" variant="filled-secondary" startAdorment={<Coin width="30" height="30" />} className={styles.CPAbtn}>CPA</Button>
        </div>
        <div className={styles.textUnderUnput}>
          <Text color="secondary" noWrap={false}>Your CPA balance 10000 CPA</Text>
          <Text color="secondary">1 CPA = 0.04$</Text>
        </div>
        <div className={styles.buyInfo}>
          <Text noWrap={false} align="center">You buy ArtCPAclub Tokens by sending {select.value} to the contract</Text>
        </div>
        <Button variant="filled" className={styles.buyButton} size="md">BUY CPA</Button>
      </div>
    </WrapContainer>
  );
};
