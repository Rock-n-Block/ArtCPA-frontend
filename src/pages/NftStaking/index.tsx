import {
  FC,
  useState,
  useEffect,
} from 'react';

import cn from 'clsx';
import { H1, H3 } from 'components/Typography';

import { BreadcrumbsComingSoon } from 'components/BreadcrumbsComingSoon';
import { NftStakingPool } from 'components/NftStakingPool';
import { HomeIcon } from 'assets/icons/icons';

import axios from 'axios';

import { useInteraction } from 'containers';

import {
  isDev,
  EarthSpiritToken,
  CommunityToken,
  EContracts,
} from 'config';

import {
  formatNumbers,
  convertWeiToEsdt,
  zeroPadStringIfOddLength,
} from 'pages/NftStaking/utils';

import {
  useGetAccountInfo,
  useGetPendingTransactions,
} from '@elrondnetwork/dapp-core';

import BigNumber from 'bignumber.js/bignumber';

import {
  AddressValue,
  Address,
  BytesValue,
  U64Value,
  BigUIntValue,
} from '@elrondnetwork/erdjs/out';

import styles from './NftStaking.module.scss';

export interface NftStakingProps {
  className?: string;
  title: string;
}

const NftStaking: FC<NftStakingProps> = ({ className, title }) => {
  const { address } = useGetAccountInfo();
  const { hasPendingTransactions } = useGetPendingTransactions();

  const [ownedNfts, setOwnedNfts] = useState<any>([]);
  const [stakedNfts, setStakedNfts] = useState<any>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rewardAmount, setRewardAmount] = useState(0);
  const [totalStakedAmount, setTotalStakedAmount] = useState(0);

  const { callMethod, sendMethodForNft } = useInteraction();

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

  const GATEWAY = isDev ? 'https://testnet-api.elrond.com' : 'https://api.elrond.com';

  const getContractData = async (method, withAddress = true) => {
    const { firstValue } = await callMethod({
      contract: EContracts.nftStaking,
      args: withAddress ? [new AddressValue(new Address(address))] : [],
      method,
      implementInterface: ['NftStaking'],
    });

    if(!firstValue) return 0;

    const value = firstValue.valueOf().toNumber();

    return value;
  };

  // fetch contract data
  useEffect(() => {
    (async () => {
      const value = await getContractData('totalStakedAmount', false);

      setTotalStakedAmount(value);
    })();

    if(!address) return;

    // reward amount
    (async () => {
      const value = await getContractData('getRewardAmount');

      setRewardAmount(convertWeiToEsdt(value, 18, 4));
    })();

    // fetch acceptable nfts from wallet
    (async () => {
      const nfts = [];

      await axios
        .get(`${GATEWAY}/accounts/${address}/nfts?collection=${EarthSpiritToken.id}`)
        .then((res) => {
          if(res.data.length > 0) {
            for (let i = 0; i < res.data.length; i += 1) {
              const data = res.data[i];

              nfts.push({
                name: data.name,
                identifier: data.identifier,
                src: data.url,
                collection: data.collection,
                nonce: data.nonce,
              });
            }
          }
        }).catch((err) => {
          console.log(err);
        });

      await axios
        .get(`${GATEWAY}/accounts/${address}/nfts?collection=${CommunityToken.id}`)
        .then((res) => {
          if(res.data.length > 0) {
            for (let i = 0; i < res.data.length; i += 1) {
              const data = res.data[i];

              nfts.push({
                name: data.name,
                identifier: data.identifier,
                src: data.url,
                collection: data.collection,
                nonce: data.nonce,
              });
            }
          }
        }).catch((err) => {
          console.log(err);
        });

      setOwnedNfts(nfts);
    })();

    // get staked nfts
    (async () => {
      const { firstValue } = await callMethod({
        contract: EContracts.nftStaking,
        args: [new AddressValue(new Address(address))],
        method: 'getStakedNfts',
        implementInterface: ['NftStaking'],
      });

      if(firstValue) {
        const data = firstValue.valueOf();

        const nfts = [];

        for(let i = 0; i < data.length; i += 1) {
          const nft = data[i];

          const identifier = `${nft.staked_token.token_type.toString()}-${zeroPadStringIfOddLength(nft.staked_token.nonce.toString(16))}`;

          // eslint-disable-next-line no-await-in-loop
          await axios
            .get(`${GATEWAY}/nfts/${identifier}`)
            .then((res) => {
              const { data } = res;

              nfts.push({
                identifier: data.identifier,
                name: data.name,
                src: data.url,
                collection: data.collection,
                nonce: data.nonce,
              });
            }).catch((err) => {
              console.log(err);
            });
        }

        setStakedNfts(nfts);
      }
    })();
  }, [hasPendingTransactions, address]);

  const stake = (collection, nonce) => {
    sendMethodForNft({
      method: 'stake',
      contract: EContracts.nftStaking,
      nft: collection,
      nonce,
    });
  };

  const unstake = (collection, nonce) => {
    sendMethodForNft({
      method: 'unstake',
      contract: EContracts.nftStaking,
      args: [
        BytesValue.fromUTF8(collection),
        new U64Value(nonce),
        new BigUIntValue(new BigNumber(1)),
      ],
    });
  };

  const unstakeAllOrClaim = (method) => {
    if((method === 'unstakeAll' && !stakedNfts.length) || (method === 'claimReward' && !rewardAmount)) return;
    sendMethodForNft({
      method,
      contract: EContracts.nftStaking,
    });
  };

  return (
    <div className={cn(styles.stakingWrapper, className)}>
      <BreadcrumbsComingSoon paths={paths} className={styles.breadcrumbs} />
      <div className={styles.container}>
        <H1 weight="bold" align="center" className={styles.title}>{title}</H1>
        <div className={styles.infoGroup}>
          <H3 className={styles.leftInfo}>Total Staked: {formatNumbers(totalStakedAmount, 0)}</H3>
          <H3 className={styles.middleInfo}>Base Reward: 0.01 EGLD</H3>
          <H3 className={styles.rightInfo}>Your Reward: {rewardAmount} EGLD</H3>
        </div>
        <NftStakingPool
          stakedNfts={stakedNfts}
          ownedNfts={ownedNfts}
          unstake={(collection, nonce) => unstake(collection, nonce)}
          stake={(collection, nonce) => stake(collection, nonce)}
          unstakeAllOrClaim={(method) => unstakeAllOrClaim(method)}
          loggedIn={address}
          reward={rewardAmount}
        />
      </div>
    </div>
  );
};
export default NftStaking;
