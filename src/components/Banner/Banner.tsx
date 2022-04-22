import { VFC } from 'react';

import cn from 'clsx';
import { BannerBackgroundImg } from 'assets/img/icons';
import { H1 } from 'components/Typography';
import { Button } from 'components/Button';
import styles from './styles.module.scss';

export interface BannerProps {
  className?: string;
  onButtonClick: (args: unknown) => void;
}

export const Banner: VFC<BannerProps> = ({ className, onButtonClick }) => {
  return (
    <div className={cn(styles.banner, className)}>
      <img src={BannerBackgroundImg} alt="" />
      <div className={styles.container}>
        <H1 align="center" className={styles.bannerText}>
          The place where Community, Art, AI,
          and Blockchain blend together to unlock
          and enhance human potential.
        </H1>
        <Button variant="filled" size="md" onClick={onButtonClick}> BUY CPA </Button>
      </div>

    </div>
  );
};
