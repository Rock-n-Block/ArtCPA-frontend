import { useState, VFC } from 'react';

import { HomePageAnchors } from 'containers/Header/Header.helpers';
import cn from 'clsx';
import { H1, H2, Text, Button } from 'components';
import { Input } from 'components/Input';
import { ProgressBar } from 'components/ProgressBar';
import { WrapContainer } from 'components/WrapContainer';
import { SelectCurrency } from 'components/SelectCurrency';
import styles from './styles.module.scss';

export interface CrowdsaleProps {
  className?: string;
}

export const Crowdsale: VFC<CrowdsaleProps> = ({ className }) => {
  const [input, setInput] = useState('');
  const [select, setSelect] = useState();
  const handleCnahgeInput = (event) => {
    setInput(event.target.value);
  };
  const handleCnahgeSelect = (event) => {
    setSelect(event);
  };

  return (
    <WrapContainer name={HomePageAnchors.BUY} className={styles.smainWrapper}>
      <H1 align="center" className={styles.mainTitle}>Crowdsale</H1>
      <div className={cn(styles.crowdsale, className)}>
        <H2 align="center" className={styles.title}>2nd stage is live!</H2>
        <Text>CPA tokens sold:</Text>
        <ProgressBar
          text="45 000 000 000"
          className={styles.progressBar}
          maxValue={45000000000}
          currentValue={18000000000}
        />
        <div className={styles.purchaseAmount}>
          <Text color="secondary">Minimal purchase amount: <Text>1 500 EGlD</Text></Text>
          <Text color="secondary" align="right">Max purchase amount: <Text align="right">1 500 EGlD</Text></Text>
        </div>
        <div className={styles.wrapInputWithSelect}>
          <Input
            name="egld"
            value={input}
            onChange={handleCnahgeInput}
            className={styles.inputs}
          />
          <SelectCurrency
            className={styles.selects}
            onChange={handleCnahgeSelect}
            value={select}
          />
        </div>
        <div className={styles.textUnderUnput}>
          <Text>Your EGLD balance 10000 EGLD</Text>
          <Text>1 EGLD = 160$</Text>
        </div>
        <div className={styles.wrapInputWithSelect}>
          <Input
            name="cpa"
            className={styles.inputs}
          />
          <SelectCurrency className={styles.selects} />
        </div>
        <div className={styles.textUnderUnput}>
          <Text>Your CPA balance 10000 CPA</Text>
          <Text>1 CPA = 0.04$</Text>
        </div>
        <div className={styles.buyInfo}>
          <Text align="center">You buy ArtCPAclub Tokens by sending EGLD to the contract</Text>
        </div>
        <Button variant="filled" className={styles.buyButton}>BUY CPA</Button>
      </div>
    </WrapContainer>
  );
};
