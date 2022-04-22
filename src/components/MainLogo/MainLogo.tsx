import { VFC } from 'react';

import cn from 'clsx';

import { MainLogoIcon } from 'assets/icons/icons';
import { H2, Text } from 'components/Typography';
import styles from './styles.module.scss';

export interface MainLogoProps {
  className?: string;
}

export const MainLogo: VFC<MainLogoProps> = ({ className }) => {
  return (
    <div className={cn(styles.mainLogo, className)}>
      <MainLogoIcon />
      <div className={styles.textContainer}>
        <H2 weight="semiBold">ArtCPAclub</H2>
        <Text size="l">Art & BlockChain</Text>
      </div>

    </div>
  );
};
