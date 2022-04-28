/* eslint-disable react/no-array-index-key */
import { VFC } from 'react';

import cn from 'clsx';

import { H1 } from 'components/Typography';
import { WrapContainer } from 'components/WrapContainer';
import { HomePageAnchors } from 'containers/Header/Header.helpers';
import styles from './styles.module.scss';
import { TeamCard } from './components/Card';
import { teamData } from './Team.helpers';

export interface TeamProps {
  className?: string;
}

export const Team: VFC<TeamProps> = ({ className }) => {
  return (
    <WrapContainer name={HomePageAnchors.TEAM} className={cn(styles.team, className)}>
      <H1 weight="semiBold" align="center"> Team </H1>
      <div className={styles.cards}>
        {teamData.map((card, index) => (
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
