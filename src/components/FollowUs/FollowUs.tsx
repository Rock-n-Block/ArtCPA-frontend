import { VFC } from 'react';

import cn from 'clsx';

import { FollowCard } from 'components/FollowCard';
import { H2 } from 'components';

import { linksData } from './linksData';
import styles from './styles.module.scss';

export interface FollowUsProps {
  className?: string;
}

export const FollowUs: VFC<FollowUsProps> = ({ className }) => {
  return (
    <>
      <H2 className={cn(styles.title)} align="center">Follow us</H2>
      <div className={cn(styles.followUs, className)}>
        {linksData.map((card) => (
          <a href={card.href}>
            <FollowCard name={card.name} icon={<card.icon />} />
          </a>
        ))}
      </div>
    </>
  );
};
