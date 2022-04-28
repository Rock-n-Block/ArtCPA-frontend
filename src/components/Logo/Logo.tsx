import { VFC } from 'react';

import cn from 'clsx';

import { LogoIcon } from 'assets/img/icons';
import { H2, Text } from 'components/Typography';
import styles from './styles.module.scss';

export interface LogoProps {
  className?: string;
}

export const Logo: VFC<LogoProps> = ({ className }) => {
  return (
    <div className={cn(styles.Logo, className)}>
      <img src={LogoIcon} alt="logo" />
      <div className={cn(styles.textContainer, styles.noneContent)}>
        <H2 weight="semiBold">ArtCPAclub</H2>
        <Text size="l">Art & BlockChain</Text>
      </div>
      <Text size="l" className={styles.textForTablet}>© Made with love by ArtCPAclub</Text>
    </div>
  );
};
