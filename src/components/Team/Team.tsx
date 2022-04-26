/* eslint-disable react/no-array-index-key */
import { VFC } from 'react';

import cn from 'clsx';

import { H1 } from 'components/Typography';
import styles from './styles.module.scss';
import { TeamCard } from './components/Card';

export interface TeamProps {
  className?: string;
  cards?: {
    image: string;
    personName: string;
    personPosition: string;
  }[];
}

export const Team: VFC<TeamProps> = ({ className, cards }) => {
  return (
    <div className={cn(styles.team, className)}>
      <H1 weight="semiBold" align="center"> Team </H1>
      <div className={styles.cards}>
        {cards && cards.map((card, index) => (
          <TeamCard
            key={index}
            image={card.image}
            personName={card.personName}
            personPosition={card.personPosition}
            className="inputCard"
          />
        ))}
      </div>
    </div>
  );
};
