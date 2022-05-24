import { VFC } from 'react';

import cn from 'clsx';
import { H1 } from 'components/Typography';
import { Button } from 'components/Button';

import { HomePageAnchors } from 'containers/Header/Header.helpers';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export interface BannerProps {
  className?: string;
}

export const Banner: VFC<BannerProps> = ({ className }) => {
  return (
    <div className={cn(styles.banner, className)}>
      <div className={styles.container}>
        <H1 align="center" className={styles.bannerText}>
          The place where Community, Art, AI,
          and Blockchain blend together to unlock
          and enhance human potential.
        </H1>
        <Link to={HomePageAnchors.BUY} className={styles.navLink}>
          <Button variant="filled" size="md"> BUY CPA </Button>
        </Link>
      </div>
    </div>
  );
};
