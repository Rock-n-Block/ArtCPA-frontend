import { ReactElement, VFC } from 'react';

import cn from 'clsx';

import { H1 } from 'components/Typography';
import styles from './styles.module.scss';

export interface TeamProps {
  className?: string;
  cards?: ReactElement[];
}

export const Team: VFC<TeamProps> = ({ className, cards }) => {
  return (
    <div className={cn(styles.team, className)}>
      <H1 weight="semiBold" align="center"> Team </H1>
      <div className={styles.cards}>
        {cards && cards.map((card) => card)}
      </div>
    </div>
  );
};
