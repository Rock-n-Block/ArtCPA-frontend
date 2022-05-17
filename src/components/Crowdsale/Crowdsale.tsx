import { useState, VFC, useCallback, useMemo, useEffect } from 'react';

import { HomePageAnchors } from 'containers/Header/Header.helpers';
import cn from 'clsx';
import { H1, H2, Text, Button } from 'components';
import { Input } from 'components/Input';
import { ProgressBar } from 'components/ProgressBar';
import { WrapContainer } from 'components/WrapContainer';
import { Countdown } from 'components/Countdown';
import { SelectCurrency } from 'components/SelectCurrency';
import { Coin } from 'assets/icons/icons';
import { useShallowSelector } from 'hooks';
import crowdSaleSelector from 'store/crowdsale/selector';
import BigNumber from 'bignumber.js';
import { decimalNumber, validateOnlyNumbers } from 'utils';
import { EContracts, MainToken } from 'config';
import userSelector from 'store/user/selectors';
import tokensSelector from 'store/tokens/selector';
import { nftWithDiscount, tokensIconsMap } from 'appConstants/tokens';
import { TSingleTokenWithIcon } from 'types';
import { OptionType } from 'components/Select/Select.types';
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { useDispatch } from 'react-redux';
import { buyToken, getCurrentStage } from 'store/crowdsale/actions';
import { useContractMethods, useInteraction } from 'containers';
import { BytesValue } from '@elrondnetwork/erdjs/out';
import styles from './styles.module.scss';
import { OwnerMenu } from './components/OwnerMenu';

export interface CrowdsaleProps {
  className?: string;
}

const fromTokenTypeToOptionType = (token: TSingleTokenWithIcon) => ({
  value: token?.address,
  label: token?.symbol,
  icon: token?.icon,
});

const fromOptionTypeToTokenType = (value: OptionType, listOfTokens: TSingleTokenWithIcon[]) => {
  const selectedToken = listOfTokens.find((token) => token.address === value.value);
  if(selectedToken) {
    return selectedToken;
  }
  return null;
};

export const Crowdsale: VFC<CrowdsaleProps> = ({ className }) => {
  const [sendInput, setSendInput] = useState('');
  const [receiveInput, setReceiveInput] = useState('');
  const { address, account: { balance } } = useGetAccountInfo();

  const dispatch = useDispatch();

  const tokens = useShallowSelector(tokensSelector.getProp('tokens'));
  const { sendMethod } = useInteraction();

  const availableTokens = useMemo(() => tokens.map<TSingleTokenWithIcon>((t) => ({ ...t, icon: tokensIconsMap[t.symbol] })), [tokens]);

  const [select, setSelect] = useState(fromTokenTypeToOptionType(availableTokens[0]));

  useEffect(() => {
    if(!select.value) {
      setSelect(fromTokenTypeToOptionType(availableTokens[0]));
    }
  }, [availableTokens, select.value]);

  const selectedFullInfo = useMemo(() => fromOptionTypeToTokenType(select, availableTokens), [select, availableTokens]);

  const { requestCurrentStage, requestStageTimeLeft } = useContractMethods();

  const { stage, stageTimeLeft, stageTokenPrice, stageLimits } = useShallowSelector(crowdSaleSelector.geTCrowdSaleState);
  const userTokens = useShallowSelector(userSelector.getProp('tokens'));
  const userNfts = useShallowSelector(userSelector.getProp('nfts'));

  const [isFetching, setIsFetching] = useState(false);

  const handleChangeSelect = useCallback((event) => {
    setSelect(event);
  }, []);

  const tokensBought = useMemo(() => {
    if(stage?.totalTokens) {
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
    const mainTokenInfo = userTokens.find((token) => token.identifier === MainToken.address);
    if(mainTokenInfo) {
      return decimalNumber({ value: new BigNumber(mainTokenInfo.balance) });
    }
    return new BigNumber(0);
  }, [userTokens]);

  const payableTokenBalance = useMemo(() => {
    const payableTokenInfo = userTokens.find((token) => token.identifier === select.value);
    if(payableTokenInfo) {
      return decimalNumber({ value: new BigNumber(payableTokenInfo.balance), decimals: new BigNumber(payableTokenInfo.decimals) });
    }
    if(select.value === 'EGLD' && address) {
      return decimalNumber({ value: new BigNumber(balance), decimals: new BigNumber(18) });
    }
    return new BigNumber(0);
  }, [address, balance, select.value, userTokens]);

  const mainTokenToPayableToken = useMemo(() => {
    if(selectedFullInfo?.price) {
      return stageTokenPrice.div(selectedFullInfo.price).toNumber();
    }
    return 1;
  }, [selectedFullInfo, stageTokenPrice]);

  const payableTokenToMainToken = useMemo(() => {
    if(selectedFullInfo?.price) {
      return new BigNumber(selectedFullInfo.price).div(stageTokenPrice).toNumber();
    }
    return 1;
  }, [selectedFullInfo, stageTokenPrice]);

  const minimumLimit = useMemo(() => {
    if(stageLimits.minimum && selectedFullInfo?.price && stage?.leftTokens) {
      const { leftTokens } = stage;
      const leftWithoutDecimals = decimalNumber({ value: leftTokens });
      const leftInPayableToken = leftWithoutDecimals.multipliedBy(mainTokenToPayableToken);
      const rawLimit = Math.ceil(stageLimits.minimum.div(selectedFullInfo.price).toNumber());
      return leftInPayableToken.isLessThan(rawLimit) ? leftInPayableToken.toNumber() - leftInPayableToken.toNumber() / 2 : rawLimit;
    }
    return 0;
  }, [mainTokenToPayableToken, selectedFullInfo, stage, stageLimits.minimum]);

  const maximumLimit = useMemo(() => {
    if(stageLimits.maximum && selectedFullInfo?.price && stage?.leftTokens) {
      const { leftTokens } = stage;
      const leftWithoutDecimals = decimalNumber({ value: leftTokens });
      const leftInPayableToken = leftWithoutDecimals.multipliedBy(mainTokenToPayableToken);
      const rawLimit = Math.ceil(stageLimits.maximum.div(selectedFullInfo.price).toNumber());
      return leftInPayableToken.isGreaterThan(rawLimit) ? rawLimit : leftInPayableToken.toNumber();
    }
    return 0;
  }, [mainTokenToPayableToken, selectedFullInfo, stage, stageLimits.maximum]);

  const handleChangeSendInput = useCallback((event) => {
    if(validateOnlyNumbers(event.target.value)) {
      const sendValue = parseFloat(event.target.value) || 0;

      const receiveAmount = sendValue * payableTokenToMainToken;
      setReceiveInput(receiveAmount.toString());
      setSendInput(event.target.value);
    }
  }, [payableTokenToMainToken]);

  const sendErrors = useMemo(() => {
    const errors = [];
    if(!Object.is(parseFloat(sendInput), NaN)) {
      if(new BigNumber(sendInput).isGreaterThan(maximumLimit)) {
        errors.push('Send amount is greater than max limit');
      }
      if(new BigNumber(parseFloat(sendInput)).isLessThan(minimumLimit.toFixed(5))) {
        errors.push('Send amount is lower than min limit');
      }
    }
    return errors;
  }, [maximumLimit, minimumLimit, sendInput]);

  const handleChangeReceiveInput = useCallback((event) => {
    if(validateOnlyNumbers(event.target.value)) {
      const receiveValue = parseFloat(event.target.value) || 0;

      const sendAmount = receiveValue * mainTokenToPayableToken;
      setSendInput(sendAmount.toString());
      setReceiveInput(event.target.value);
    }
  }, [mainTokenToPayableToken]);

  const receiveErrors = useMemo(() => {
    const errors = [];
    if(!Object.is(parseFloat(receiveInput), NaN)) {
      if(new BigNumber(parseFloat(receiveInput) * mainTokenToPayableToken).isGreaterThan(maximumLimit)) {
        errors.push('Receive amount is greater than max limit');
      }
      if(new BigNumber(parseFloat(receiveInput) * mainTokenToPayableToken).isLessThan(minimumLimit.toFixed(5))) {
        errors.push('Receive amount is lower than min limit');
      }
    }
    return errors;
  }, [mainTokenToPayableToken, maximumLimit, minimumLimit, receiveInput]);

  const isStageSoldOut = useMemo(() => {
    if(stage?.leftTokens) {
      const { leftTokens } = stage;
      return leftTokens.isEqualTo(0);
    }
    return false;
  }, [stage]);

  const onBuyClickHandler = useCallback(async () => {
    if(selectedFullInfo?.address) {
      setIsFetching(true);
      dispatch(buyToken({
        data: {
          tokenAddress: selectedFullInfo.address,
          amountToPay: decimalNumber({ value: new BigNumber(sendInput), decimals: new BigNumber(selectedFullInfo.decimals), format: 'with' }).toFixed(0),
          senderAddress: address,
        },
        onSignatureGet: (signature) => {
          sendMethod({
            args: [new BytesValue(signature.msg), new BytesValue(signature.signature)],
            method: 'pay',
            contract: EContracts.crowdSale,
            token: selectedFullInfo.address,
            amount: sendInput,
            decimals: +selectedFullInfo.decimals,
          }).then(() => dispatch(getCurrentStage())).finally(() => setIsFetching(false));
        },
      }));
    }
  }, [address, dispatch, selectedFullInfo, sendInput, sendMethod]);

  const onTimerOut = useCallback(() => {
    requestCurrentStage();
    requestStageTimeLeft();
    dispatch(getCurrentStage());
  }, [dispatch, requestCurrentStage, requestStageTimeLeft]);

  const allowToCrowd = useMemo(() => parseFloat(receiveInput) < 0 || isFetching || Object.is(parseFloat(receiveInput), NaN) || parseFloat(sendInput) > maximumLimit || sendErrors.length !== 0 || receiveErrors.length !== 0, [isFetching, maximumLimit, receiveErrors.length, receiveInput, sendErrors.length, sendInput]);

  return (
    <WrapContainer name={HomePageAnchors.BUY} className={styles.smainWrapper}>
      <H1 align="center" className={styles.mainTitle} weight="bold">Crowdsale</H1>
      <div className={cn(styles.crowdsale, className)}>
        <H2 align="center" className={styles.title} weight="semiBold">{stage ? `${stage.stageNumber.toString()} stage is live!` : `${MainToken.symbol} crowdsale is over`}</H2>
        {stage && (
        <>
          <Countdown endAuction={stageEndTimestamp} auctionEndText="" onTimerOut={onTimerOut} />
          <Text>{MainToken.symbol} tokens available:</Text>
          <ProgressBar
            text={decimalNumber({ value: stage.totalTokens }).toString()}
            className={styles.progressBar}
            maxValue={decimalNumber({ value: stage.totalTokens }).toNumber()}
            currentValue={tokensBought.toNumber()}
          />
          {!isStageSoldOut ? (
            <>
              <div className={styles.purchaseAmount}>
                <Text noWrap={false} className={styles.purschAmount}>Min purchase amount: <Text>{new BigNumber(minimumLimit).decimalPlaces(5).toString()} {select.label}</Text></Text>
                <Text noWrap={false} align="right" className={styles.purschAmount}>Max purchase amount: <Text align="right">{new BigNumber(maximumLimit).decimalPlaces(5).toString()} {select.label}</Text></Text>
              </div>
              <div className={styles.wrapInputWithSelect}>
                <Input
                  name="send"
                  value={sendInput}
                  onChange={handleChangeSendInput}
                  className={styles.inputs}
                  placeholder="Send"
                  error={sendErrors.join(',')}
                />
                <SelectCurrency
                  className={styles.selects}
                  onChange={handleChangeSelect}
                  value={select}
                  options={availableTokens.map((t) => fromTokenTypeToOptionType(t))}
                />
              </div>
              <div className={styles.textUnderUnput}>
                <Text color="secondary" noWrap={false}>Your {select.value} balance {payableTokenBalance.decimalPlaces(5).toString()} {select.label}</Text>
                <Text color="secondary">1 {select.label} = {new BigNumber(selectedFullInfo?.price || 0).decimalPlaces(5).toString()}$</Text>
              </div>
              <div className={styles.wrapInputWithSelect}>
                <Input
                  name="receive"
                  className={styles.inputs}
                  placeholder="Receive"
                  value={receiveInput}
                  onChange={handleChangeReceiveInput}
                  error={receiveErrors.join(',')}
                />
                <Button size="sm" variant="filled-secondary" startAdorment={<Coin width="30" height="30" />} className={styles.CPAbtn}>{MainToken.symbol}</Button>
              </div>
              <div className={styles.textUnderUnput}>
                <Text color="secondary" noWrap={false}>Your {MainToken.address} balance {mainTokenBalance.decimalPlaces(5).toString()} {MainToken.symbol}</Text>
                <Text color="secondary">1 {MainToken.symbol} = {stageTokenPrice.decimalPlaces(5).toString()}$</Text>
              </div>
              {userNfts.length > 0 ? (
                <div>
                  <Text size="s" color="secondary" align="center">You&apos;ll get +10% {MainToken.symbol} because you have NFTs from {userNfts.join(',')}</Text>
                  <Text size="s" color="secondary" align="center">{new BigNumber(+receiveInput * 1.1).decimalPlaces(5).toNumber()} {MainToken.symbol}</Text>
                </div>
              ) : (
                <div>
                  <Text size="s" color="secondary" align="center">You&apos;ll get +10% {MainToken.symbol} if you have NFTs from {nftWithDiscount.join(',')}</Text>
                </div>
              )}
              <div className={styles.buyInfo}>
                <Text noWrap={false} align="center">You buy ArtCPAclub Tokens by sending {select.value} to the contract</Text>
              </div>
              <Button disabled={allowToCrowd || !address} variant="filled" className={styles.buyButton} size="md" onClick={onBuyClickHandler}>BUY {MainToken.symbol}</Button>
            </>
          )
            : <Text noWrap={false} align="center">{stage.stageNumber.toString()} stage is sold out!</Text>}
        </>
        )}
        <OwnerMenu stage={stage} />
      </div>
    </WrapContainer>
  );
};
