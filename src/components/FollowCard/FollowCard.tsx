import { FC } from 'react';

import cn from 'clsx';
import { H3 } from 'components';
import styles from './styles.module.scss';

export interface FollowCardProps {
  className?: string;
  name: string,
}

export const FollowCard: FC<FollowCardProps> = ({ className, name, children }) => {
  return (
    <div className={cn(styles.followCard, className)}>
      {children}
      <H3 className={styles.name}>{name}</H3>
    </div>
  );
};
