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
    <div className={cn(styles.mainLogo)}>
      <MainLogoIcon />
      <div className={cn(styles.textContainer, className, styles.noneContent)}>
        <H2 weight="semiBold">ArtCPAclub</H2>
        <Text size="l">Art & BlockChain</Text>
      </div>
      <Text size="l" className={styles.textForTablet}>© Made with love by ArtCPAclub</Text>
    </div>
  );
};
