import { VFC } from 'react';

import cn from 'clsx';

import { FollowCard } from 'components/FollowCard';
import { H2 } from 'components';

import { Link } from 'react-router-dom';
import { linksData } from './linksData';
import styles from './styles.module.scss';

export interface FollowUsProps {
  className?: string;
}

export const FollowUs: VFC<FollowUsProps> = ({ className }) => {
  return (
    <div className={styles.testBackground}>
      <H2 className={cn(styles.title)} align="center">Follow us</H2>
      <div className={cn(styles.followUs, className)}>
        {linksData.map((card) => (
          <FollowCard name={card.name}>
            <Link
              target="_blank"
              to={card.href}
              className={styles.link}
            >
              <div className={styles.svgWrap} />
              <card.icon />
            </Link>
          </FollowCard>
        ))}
      </div>
    </div>
  );
};
