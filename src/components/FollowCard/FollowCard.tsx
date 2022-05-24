import { FC, ReactElement } from 'react';

import cn from 'clsx';
import { H3 } from 'components';
import styles from './styles.module.scss';

export interface FollowCardProps {
  className?: string;
  name: string,
  icon: ReactElement
}

export const FollowCard: FC<FollowCardProps> = ({ className, name, icon }) => {
  return (
    <div className={cn(styles.followCard, className)}>
      <div className={styles.svgWrap} />
      {icon}
      <H3 className={styles.name} weight="semiBold">{name}</H3>
    </div>
  );
};
