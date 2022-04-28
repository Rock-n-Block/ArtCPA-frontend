/* eslint-disable react/no-array-index-key */
import { VFC } from 'react';

import cn from 'clsx';

import { FirstCard, SecondCard, ThirdCard, FourthCard } from 'assets/img/icons';
import { H1 } from 'components/Typography';
import { WrapContainer } from 'components/WrapContainer';
import styles from './styles.module.scss';
import { TeamCard } from './components/Card';

export interface TeamProps {
  className?: string;
}

export const Team: VFC<TeamProps> = ({ className }) => {
  const data = [
    { image: FirstCard, personName: 'Name', personPosition: 'Proffesion' },
    { image: SecondCard, personName: 'Name', personPosition: 'Proffesion' },
    { image: ThirdCard, personName: 'Name', personPosition: 'Proffesion' },
    { image: FourthCard, personName: 'Name', personPosition: 'Proffesion' },

  ];
  return (
    <WrapContainer className={cn(styles.team, className)}>
      <H1 weight="semiBold" align="center"> Team </H1>
      <div className={styles.cards}>
        {data && data.map((card, index) => (
          <TeamCard
            key={index}
            image={card.image}
            personName={card.personName}
            personPosition={card.personPosition}
            className="inputCard"
          />
        ))}
      </div>
    </WrapContainer>
  );
};
