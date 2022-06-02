import { VFC, useState, useEffect } from 'react';

import cn from 'clsx';
import { H2, H3, Button, Modal, Input, Text } from 'components';

import {
  validateOnlyNumbers,
} from 'utils';

import {
  FounderToken,
} from 'config';

import {
  formatNumbers,
  convertTimestampToDate,
} from 'pages/Staking/utils';

import { LogoIcon } from 'assets/img/icons';

import { StakingPoolInfo } from './components/StakingPoolInfo';

import styles from './styles.module.scss';

const dayInMillisecs = 60 * 60 * 24 * 1000;

export interface StakingPoolProps {
  className?: string;
  title?: string;
  balance?: number;
  lockingDuration?: number;
  stakedAmount?: number;
  undelegateAmount?: number;
  rewardAmount?: number;
  stakedFounderToken?: number;
  founderToken?: number;
  isFounder?: boolean;
  lastStakedTimestamp?: number;
  disabled?: boolean;
  penalty?: number;
  totalStakeAmount?: number;
  currentApr?: number;
  stakerCount?: number;

  stake: (amount: number) => void;
  unstake: () => void;
  reinvest: () => void;
  claim: () => void;
}

export const StakingPool: VFC<StakingPoolProps> = ({
  className,
  title,
  balance = 0,
  lockingDuration = 0,
  stakedAmount = 0,
  undelegateAmount = 0,
  rewardAmount = 0,
  lastStakedTimestamp = 0,
  stakedFounderToken = 0,
  founderToken = 0,
  totalStakeAmount = 0,
  currentApr = 0,
  stakerCount = 0,
  isFounder = false,
  disabled = true,
  penalty,
  stake,
  unstake,
  reinvest,
  claim,
}) => {
  const [showStakeAmountModal, setShowStakeAmountModal] = useState(false);
  const [showStakeDurationModal, setShowStakeDurationModal] = useState(false);
  const [showUnstakeDurationModal, setShowUnstakeDurationModal] = useState(false);

  const [actionType, setActionType] = useState(0);

  const [stakeAmountInput, setStakeAmountInput] = useState('');
  const [stakeAmount, setStakeAmount] = useState(0);

  const handleChangeSendInput = (event) => {
    if(validateOnlyNumbers(event.target.value)) {
      setStakeAmountInput(event.target.value);
    }
  };

  useEffect(() => {
    const amount = Number(stakeAmountInput);

    setStakeAmount(amount);
  }, [stakeAmountInput]);

  return (
    <>
      <div className={cn(styles.stakingpool, className)}>
        <div className={styles.titleGroup}>
          <img src={LogoIcon} alt="logo" className={styles.logoImg} />
          <H2 align="center" className={styles.title} weight="semiBold">
            <span>{title}</span>
            {
              isFounder &&
              <p className={styles.subtitle}>Available to Founders Coin holders</p>
            }
          </H2>
        </div>
        <div className={styles.infoGroup}>
          <H3 className={styles.leftInfo}>Staked CPA: {formatNumbers(totalStakeAmount)}</H3>
          <H3 className={styles.middleInfo}>Staker Count: {stakerCount}</H3>
          <H3 className={styles.rightInfo}>Current APR: {currentApr}%</H3>
        </div>
        <div className={styles.stakingpoolInfos}>
          <StakingPoolInfo
            value={`${lockingDuration} days`}
            description="Locking Duration"
          />
          <StakingPoolInfo
            value={formatNumbers(stakedAmount)}
            description="Staked Amount"
          />
          {
            isFounder ? (
              <StakingPoolInfo
                value={stakedFounderToken ? `${FounderToken.id}-${stakedFounderToken.toString()}` : 'No Locked'}
                description="Founder Token"
              />
            ) : (
              <StakingPoolInfo
                value={formatNumbers(undelegateAmount)}
                description="Undelegate Amount"
              />
            )
          }
          <StakingPoolInfo
            value={formatNumbers(rewardAmount)}
            description="Reward Amount"
          />
        </div>
        <div className={styles.buttonGroupWrapper}>
          <div className={styles.buttonGroup}>
            <Button
              disabled={isFounder ? disabled || (!stakedFounderToken && !founderToken) : disabled}
              className={styles.button}
              onClick={() => {
                const disableStatus = isFounder ? disabled || (!stakedFounderToken && !founderToken) : disabled;
                if(disableStatus) return;
                setShowStakeAmountModal(true);
              }}
            >
              STAKE
            </Button>
            <Button
              disabled={disabled || !stakedAmount}
              className={styles.button}
              onClick={() => {
                if(disabled || !stakedAmount) return;
                if(isFounder) {
                  unstake();
                } else {
                  setShowUnstakeDurationModal(true);
                }
              }}
            >
              UNSTAKE
            </Button>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              disabled={(isFounder ? disabled || (!stakedFounderToken && !founderToken) : disabled) || !rewardAmount}
              className={styles.button}
              onClick={() => {
                const disableStatus = (isFounder ? disabled || (!stakedFounderToken && !founderToken) : disabled) || !rewardAmount;
                if(disableStatus) return;
                if(isFounder) {
                  reinvest();
                } else {
                  setActionType(1);
                  setShowStakeDurationModal(true);
                }
              }}
            >
              REINVEST
            </Button>
            <Button
              disabled={disabled || !rewardAmount}
              className={styles.button}
              onClick={() => {
                if(disabled || !rewardAmount) return;
                claim();
              }}
            >
              CLAIM
            </Button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showStakeAmountModal}
        onClose={() => setShowStakeAmountModal(false)}
        title={`Balance is ${formatNumbers(balance)}`}
        size="none"
      >
        <Input
          name="stakeAmount"
          value={stakeAmountInput}
          onChange={handleChangeSendInput}
          className={styles.inputs}
          placeholder="Enter Stake Amount"
          // error={sendErrors.join(',')}
        />
        <div className={styles.buttonGroup}>
          <Button
            className={styles.modalButton}
            onClick={() => setShowStakeAmountModal(false)}
          >
            Close
          </Button>
          <Button
            className={styles.modalButton}
            variant="filled"
            onClick={() => {
              if (stakeAmount <= 0 || balance < stakeAmount) {
                return;
              }
              if(isFounder) {
                setShowStakeAmountModal(false);
                stake(stakeAmount);
              } else {
                setActionType(0);
                setShowStakeAmountModal(false);
                setShowStakeDurationModal(true);
              }
            }}
          >
            Stake
          </Button>
        </div>
      </Modal>

      <Modal
        isOpen={showStakeDurationModal}
        onClose={() => setShowStakeDurationModal(false)}
        title={`Your token balance is ${formatNumbers(balance)}`}
        size="none"
      >
        <Text
          noWrap={false}
        >
          {`${penalty}% penalties will apply if you unstake before ${convertTimestampToDate(Date.now() + lockingDuration * dayInMillisecs)}.`}
        </Text>
        <div className={styles.buttonGroup}>
          <Button
            className={styles.modalButton}
            onClick={() => setShowStakeDurationModal(false)}
          >
            Close
          </Button>
          <Button
            className={styles.modalButton}
            variant="filled"
            onClick={() => {
              if(actionType) {
                if(rewardAmount <= 0) return;
                setShowStakeDurationModal(false);
                reinvest();
              } else {
                if(stakeAmount <= 0) return;
                setShowStakeDurationModal(false);
                stake(stakeAmount);
              }
            }}
          >
            {actionType ? 'Reinvest' : 'Stake'}
          </Button>
        </div>
      </Modal>

      <Modal
        isOpen={showUnstakeDurationModal}
        onClose={() => setShowUnstakeDurationModal(false)}
        title={`Staked amount: ${formatNumbers(stakedAmount)}`}
        size="none"
      >
        <Text
          noWrap={false}
        >
          {`${penalty}% penalties will apply if you unstake before ${convertTimestampToDate(lastStakedTimestamp + lockingDuration * dayInMillisecs)}.`}
        </Text>
        <div className={styles.buttonGroup}>
          <Button
            className={styles.modalButton}
            onClick={() => setShowUnstakeDurationModal(false)}
          >
            Close
          </Button>
          <Button
            className={styles.modalButton}
            variant="filled"
            onClick={() => {
              if (stakedAmount <= 0) {
                return;
              }
              setShowUnstakeDurationModal(false);
              unstake();
            }}
          >
            Unstake
          </Button>
        </div>
      </Modal>
    </>
  );
};
