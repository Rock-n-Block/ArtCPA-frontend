import {
  FC,
  useState,
  useEffect,
} from 'react';

import cn from 'clsx';
import { H1, H2 } from 'components/Typography';

import { BreadcrumbsComingSoon } from 'components/BreadcrumbsComingSoon';
import { StakingPool } from 'components/StakingPool';
import { HomeIcon } from 'assets/icons/icons';

import { useInteraction } from 'containers';

import {
  formatNumbers,
} from 'pages/Staking/utils';

import {
  useGetAccountInfo,
  useGetPendingTransactions,
} from '@elrondnetwork/dapp-core';

import {
  AddressValue,
  Address,
} from '@elrondnetwork/erdjs/out';

import axios from 'axios';

import {
  EContracts,
  MainToken,
  isDev,
  FounderToken,
} from 'config';

import { convertWeiToEsdt } from './utils';

import styles from './Staking.module.scss';

export interface StakingProps {
  className?: string;
  title: string;
}

const Staking: FC<StakingProps> = ({ className, title }) => {
  const { address } = useGetAccountInfo();
  const { hasPendingTransactions } = useGetPendingTransactions();

  const [tokenBalance, setTokenBalance] = useState(0);

  const [totalStakeAmount, setTotalStakeAmount] = useState(0);

  const [firstPoolDuration, setFirstPoolDuration] = useState(0);
  const [firstPoolStakedAmount, setFirstPoolStakedAmount] = useState(0);
  const [firstPoolRewardAmount, setFirstPoolRewardAmount] = useState(0);
  const [firstPoolUndelegateAmount, setFirstPoolUndelegateAmount] = useState(0);
  const [firstPoolStakedTimestamp, setFirstPoolStakedTimestamp] = useState(0);
  const [firstPoolTotalStakeAmount, setFirstPoolTotalStakeAmount] = useState(0);
  const [firstPoolCurrentApr, setFirstPoolCurrentApr] = useState(0);
  const [firstPoolStakerCount, setFirstPoolStakerCount] = useState(0);

  const [secondPoolDuration, setSecondPoolDuration] = useState(0);
  const [secondPoolStakedAmount, setSecondPoolStakedAmount] = useState(0);
  const [secondPoolRewardAmount, setSecondPoolRewardAmount] = useState(0);
  const [secondPoolUndelegateAmount, setSecondPoolUndelegateAmount] = useState(0);
  const [secondPoolStakedTimestamp, setSecondPoolStakedTimestamp] = useState(0);
  const [secondPoolTotalStakeAmount, setSecondPoolTotalStakeAmount] = useState(0);
  const [secondPoolCurrentApr, setSecondPoolCurrentApr] = useState(0);
  const [secondPoolStakerCount, setSecondPoolStakerCount] = useState(0);

  const [thirdPoolDuration, setThirdPoolDuration] = useState(0);
  const [thirdPoolStakedAmount, setThirdPoolStakedAmount] = useState(0);
  const [thirdPoolRewardAmount, setThirdPoolRewardAmount] = useState(0);
  const [thirdPoolUndelegateAmount, setThirdPoolUndelegateAmount] = useState(0);
  const [thirdPoolStakedTimestamp, setThirdPoolStakedTimestamp] = useState(0);
  const [thirdPoolTotalStakeAmount, setThirdPoolTotalStakeAmount] = useState(0);
  const [thirdPoolCurrentApr, setThirdPoolCurrentApr] = useState(0);
  const [thirdPoolStakerCount, setThirdPoolStakerCount] = useState(0);

  const [founderPoolStakedAmount, setFounderPoolStakedAmount] = useState(0);
  const [founderPoolRewardAmount, setFounderPoolRewardAmount] = useState(0);
  const [founderStakedToken, setFounderStakedToken] = useState(0);
  const [founderToken, setFounderToken] = useState(0);
  const [founderPoolTotalStakeAmount, setFounderPoolTotalStakeAmount] = useState(0);
  const [founderPoolCurrentApr, setFounderPoolCurrentApr] = useState(0);
  const [founderPoolStakerCount, setFounderPoolStakerCount] = useState(0);

  const paths = [
    {
      icon: <HomeIcon />,
      label: 'Home',
      path: '/',
    },
    {
      label: title,
      path: `/${title}`,
    },
  ];

  const { callMethod, sendMethod, sendMethodWithMulti } = useInteraction();

  const stakeAction = (method, amount) => {
    sendMethod({
      method,
      contract: EContracts.tokenStaking,
      token: MainToken.address,
      amount,
      decimals: +MainToken.decimals,
    });
  };

  const otherAction = (method) => {
    sendMethod({
      method,
      contract: EContracts.tokenStaking,
    });
  };

  const founderStakeOrReinvest = (method, amount) => {
    sendMethodWithMulti({
      method,
      contract: EContracts.tokenStaking,
      token: MainToken.address,
      amount,
      decimals: +MainToken.decimals,
      nft: FounderToken.id,
      nonce: founderStakedToken ? 0 : founderToken,
    });
  };

  const getContractData = async (method, withAddress = true) => {
    const { firstValue } = await callMethod({
      contract: EContracts.tokenStaking,
      args: withAddress ? [new AddressValue(new Address(address))] : [],
      method,
      implementInterface: ['TokenStaking'],
    });

    if(!firstValue) return 0;

    const value = firstValue.valueOf().toNumber();

    return value;
  };

  // fetch contract data
  useEffect(() => {
    if(!address) return;

    // total stake amount
    (async () => {
      const value = await getContractData('getTotalStakeAmount', false);

      setTotalStakeAmount(convertWeiToEsdt(value));
    })();

    // first pool duration
    (async () => {
      const value = await getContractData('getFirstPoolDuration', false);

      setFirstPoolDuration(value);
    })();

    // first pool stake
    (async () => {
      const value = await getContractData('getFirstPoolStakeAmount');

      setFirstPoolStakedAmount(convertWeiToEsdt(value));
    })();

    // first pool reward
    (async () => {
      const value = await getContractData('getCurrentFirstPoolReward');

      setFirstPoolRewardAmount(convertWeiToEsdt(value));
    })();

    // first pool undelegate
    (async () => {
      const value = await getContractData('getCurrentFirstPoolUndelegate');

      setFirstPoolUndelegateAmount(convertWeiToEsdt(value));
    })();

    // first pool timestamp
    (async () => {
      const value = await getContractData('getFirstPoolLastStakeTimestamps');

      if (value === 0) {
        setFirstPoolStakedTimestamp(Date.now());
      } else {
        setFirstPoolStakedTimestamp(value * 1000);
      }
    })();

    // first pool total stake amount
    (async () => {
      const value = await getContractData('getFirstPoolTotalStakeAmount', false);

      setFirstPoolTotalStakeAmount(convertWeiToEsdt(value));
    })();

    // first pool current apr
    (async () => {
      let value = await getContractData('getFirstPoolCurrentApr');

      if(value === 0) {
        value = 5000;
      }

      setFirstPoolCurrentApr(value / 100);
    })();

    // first pool total staker count
    (async () => {
      const value = await getContractData('getFirstPoolStakerCount', false);

      setFirstPoolStakerCount(value);
    })();

    // second pool duration
    (async () => {
      const value = await getContractData('getSecondPoolDuration', false);

      setSecondPoolDuration(value);
    })();

    // second pool stake
    (async () => {
      const value = await getContractData('getSecondPoolStakeAmount');

      setSecondPoolStakedAmount(convertWeiToEsdt(value));
    })();

    // second pool reward
    (async () => {
      const value = await getContractData('getCurrentSecondPoolReward');

      setSecondPoolRewardAmount(convertWeiToEsdt(value));
    })();

    // second pool undelegate
    (async () => {
      const value = await getContractData('getCurrentSecondPoolUndelegate');

      setSecondPoolUndelegateAmount(convertWeiToEsdt(value));
    })();

    // second pool timestamp
    (async () => {
      const value = await getContractData('getSecondPoolLastStakeTimestamps');

      if (value === 0) {
        setSecondPoolStakedTimestamp(Date.now());
      } else {
        setSecondPoolStakedTimestamp(value * 1000);
      }
    })();

    // second pool total stake amount
    (async () => {
      const value = await getContractData('getSecondPoolTotalStakeAmount', false);

      setSecondPoolTotalStakeAmount(convertWeiToEsdt(value));
    })();

    // second pool current apr
    (async () => {
      let value = await getContractData('getSecondPoolCurrentApr');

      if(value === 0) {
        value = 10000;
      }

      setSecondPoolCurrentApr(value / 100);
    })();

    // second pool total staker count
    (async () => {
      const value = await getContractData('getSecondPoolStakerCount', false);

      setSecondPoolStakerCount(value);
    })();

    // third pool duration
    (async () => {
      const value = await getContractData('getThirdPoolDuration', false);

      setThirdPoolDuration(value);
    })();

    // third pool stake
    (async () => {
      const value = await getContractData('getThirdPoolStakeAmount');

      setThirdPoolStakedAmount(convertWeiToEsdt(value));
    })();

    // third pool reward
    (async () => {
      const value = await getContractData('getCurrentThirdPoolReward');

      setThirdPoolRewardAmount(convertWeiToEsdt(value));
    })();

    // third pool undelegate
    (async () => {
      const value = await getContractData('getCurrentThirdPoolUndelegate');

      setThirdPoolUndelegateAmount(convertWeiToEsdt(value));
    })();

    // third pool timestamp
    (async () => {
      const value = await getContractData('getThirdPoolLastStakeTimestamps');

      if (value === 0) {
        setThirdPoolStakedTimestamp(Date.now());
      } else {
        setThirdPoolStakedTimestamp(value * 1000);
      }
    })();

    // third pool total stake amount
    (async () => {
      const value = await getContractData('getThirdPoolTotalStakeAmount', false);

      setThirdPoolTotalStakeAmount(convertWeiToEsdt(value));
    })();

    // third pool total staker count
    (async () => {
      const value = await getContractData('getThirdPoolStakerCount', false);

      setThirdPoolStakerCount(value);
    })();

    // founder pool stake
    (async () => {
      const value = await getContractData('getFounderPoolStakeAmount');

      setFounderPoolStakedAmount(convertWeiToEsdt(value));
    })();

    // third pool current apr
    (async () => {
      let value = await getContractData('getThirdPoolCurrentApr');

      if(value === 0) {
        value = 21000;
      }

      setThirdPoolCurrentApr(value / 100);
    })();

    // founder pool reward
    (async () => {
      const value = await getContractData('getCurrentFounderPoolReward');

      setFounderPoolRewardAmount(convertWeiToEsdt(value));
    })();

    // founder stake nft
    (async () => {
      const { firstValue } = await callMethod({
        contract: EContracts.tokenStaking,
        args: [new AddressValue(new Address(address))],
        method: 'getFounderTokenNonce',
        implementInterface: ['TokenStaking'],
      });

      if(!firstValue) {
        setFounderStakedToken(0);
      } else {
        const value = firstValue.valueOf();

        setFounderStakedToken(value.toNumber());
      }
    })();

    // founder pool total stake amount
    (async () => {
      const value = await getContractData('getFounderPoolTotalStakeAmount', false);

      setFounderPoolTotalStakeAmount(convertWeiToEsdt(value));
    })();

    // founder pool current apr
    (async () => {
      let value = await getContractData('getFounderPoolCurrentApr');

      if(value === 0) {
        value = 25000;
      }

      setFounderPoolCurrentApr(value / 100);
    })();

    // founder pool total staker count
    (async () => {
      const value = await getContractData('getFounderPoolStakerCount', false);

      setFounderPoolStakerCount(value);
    })();

    (async () => {
      const GATEWAY = isDev ? 'https://testnet-api.elrond.com' : 'https://api.elrond.com';

      await axios
        .get(`${GATEWAY}/accounts/${address}/nfts?collection=${FounderToken.id}`)
        .then((res) => {
          if(res.data.length > 0) {
            setFounderToken(res.data[0].nonce);
          } else {
            setFounderToken(0);
          }
        }).catch((err) => {
          console.log(err);
        });
    })();

    (async () => {
      const GATEWAY = isDev ? 'https://testnet-api.elrond.com' : 'https://api.elrond.com';

      await axios.get(`${GATEWAY}/accounts/${address}/tokens?search=${MainToken.address}`)
        .then((res) => {
          if(res.data.length > 0) {
            const balance = convertWeiToEsdt(res.data[0].balance);

            setTokenBalance(balance);
          }
        });
    })();
  }, [hasPendingTransactions, address]);

  return (
    <div className={cn(styles.stakingWrapper, className)}>
      <BreadcrumbsComingSoon paths={paths} className={styles.breadcrumbs} />
      <div className={styles.container}>
        <H1 weight="bold" align="center" className={styles.title}>{title}</H1>
        <H2 align="center">Total Staked CPA: {formatNumbers(totalStakeAmount)}</H2>

        <StakingPool
          title="Junior Pool"
          balance={tokenBalance}
          penalty={10}
          lockingDuration={firstPoolDuration}
          stakedAmount={firstPoolStakedAmount}
          undelegateAmount={firstPoolUndelegateAmount}
          rewardAmount={firstPoolRewardAmount}
          lastStakedTimestamp={firstPoolStakedTimestamp}
          disabled={!address}
          totalStakeAmount={firstPoolTotalStakeAmount}
          currentApr={firstPoolCurrentApr}
          stakerCount={firstPoolStakerCount}
          stake={(amount) => stakeAction('firstPoolStake', amount)}
          unstake={() => otherAction('firstPoolUnstake')}
          reinvest={() => otherAction('firstPoolReinvest')}
          claim={() => otherAction('firstPoolClaim')}
        />

        <StakingPool
          title="Admirer Pool"
          balance={tokenBalance}
          penalty={20}
          lockingDuration={secondPoolDuration}
          stakedAmount={secondPoolStakedAmount}
          undelegateAmount={secondPoolUndelegateAmount}
          rewardAmount={secondPoolRewardAmount}
          lastStakedTimestamp={secondPoolStakedTimestamp}
          disabled={!address}
          totalStakeAmount={secondPoolTotalStakeAmount}
          currentApr={secondPoolCurrentApr}
          stakerCount={secondPoolStakerCount}
          stake={(amount) => stakeAction('secondPoolStake', amount)}
          unstake={() => otherAction('secondPoolUnstake')}
          reinvest={() => otherAction('secondPoolReinvest')}
          claim={() => otherAction('secondPoolClaim')}
        />

        <StakingPool
          title="Confident Pool"
          balance={tokenBalance}
          penalty={30}
          lockingDuration={thirdPoolDuration}
          stakedAmount={thirdPoolStakedAmount}
          undelegateAmount={thirdPoolUndelegateAmount}
          rewardAmount={thirdPoolRewardAmount}
          lastStakedTimestamp={thirdPoolStakedTimestamp}
          disabled={!address}
          totalStakeAmount={thirdPoolTotalStakeAmount}
          currentApr={thirdPoolCurrentApr}
          stakerCount={thirdPoolStakerCount}
          stake={(amount) => stakeAction('thirdPoolStake', amount)}
          unstake={() => otherAction('thirdPoolUnstake')}
          reinvest={() => otherAction('thirdPoolReinvest')}
          claim={() => otherAction('thirdPoolClaim')}
        />

        <StakingPool
          title="Founders Pool"
          lockingDuration={0}
          balance={tokenBalance}
          stakedAmount={founderPoolStakedAmount}
          stakedFounderToken={founderStakedToken}
          founderToken={founderToken}
          rewardAmount={founderPoolRewardAmount}
          lastStakedTimestamp={firstPoolStakedTimestamp}
          disabled={!address}
          totalStakeAmount={founderPoolTotalStakeAmount}
          currentApr={founderPoolCurrentApr}
          stakerCount={founderPoolStakerCount}
          isFounder
          stake={(amount) => founderStakeOrReinvest('founderPoolStake', amount)}
          unstake={() => otherAction('founderPoolUnstake')}
          reinvest={() => founderStakeOrReinvest('founderPoolReinvest', 0)}
          claim={() => otherAction('founderPoolClaim')}
        />
      </div>
    </div>
  );
};
export default Staking;
