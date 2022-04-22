import { VFC } from 'react';

import cn from 'clsx';
import { Text, H1 } from 'components/Typography';

import { Button } from 'components/Button';
// import { Header } from 'containers';
import styles from './styles.module.scss';

export interface ComingSoonProps {
  className?: string;
  title: string;
  onButtonClick: () => void;
}

export const ComingSoon: VFC<ComingSoonProps> = ({ className, title, onButtonClick }) => {
  return (
    <div className={cn(styles.comingSoon, className)}>
      {/* <Header chainType="testnet" address="" onToggleChainType={() => {}} onConnectWallet={() => {}} disconnect={() => {}} isHomePage isUserInfoLoading /> */}
      <H1 className={styles.header}>Header</H1>
      <div className={styles.container}>
        <H1 weight="bold" align="center" className={styles.title}>{title}</H1>
        <Text weight="bold" className={styles.bodyText} align="center"> Coming soon </Text>
        <Button variant="filled" className={styles.returnButton} onClick={onButtonClick}> Go to home page </Button>
      </div>
    </div>
  );
};
