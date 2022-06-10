import {
  FC,
} from 'react';

import cn from 'clsx';
import { H1, H2 } from 'components/Typography';

import { BreadcrumbsComingSoon } from 'components/BreadcrumbsComingSoon';
import { NftStakingPool } from 'components/NftStakingPool';
import { HomeIcon } from 'assets/icons/icons';

import {
  formatNumbers,
} from 'pages/NftStaking/utils';

import styles from './NftStaking.module.scss';

export interface StakingProps {
  className?: string;
  title: string;
}

const NftStaking: FC<StakingProps> = ({ className, title }) => {
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

  // const stake = () => {
  // };

  return (
    <div className={cn(styles.stakingWrapper, className)}>
      <BreadcrumbsComingSoon paths={paths} className={styles.breadcrumbs} />
      <div className={styles.container}>
        <H1 weight="bold" align="center" className={styles.title}>{title}</H1>
        <H2 align="center">Total Staked NFTs: {formatNumbers(10000, 0)}</H2>
        <NftStakingPool />
      </div>
    </div>
  );
};
export default NftStaking;
