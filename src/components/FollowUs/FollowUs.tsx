import { VFC } from 'react';

import cn from 'clsx';

import { FollowCard } from 'components/FollowCard';
import { H2 } from 'components';
import { WrapContainer } from 'components/WrapContainer';
import { linksData } from './linksData';
import styles from './styles.module.scss';

export interface FollowUsProps {
  className?: string;
}

export const FollowUs: VFC<FollowUsProps> = ({ className }) => {
  return (
    <WrapContainer>
      <H2 className={cn(styles.title)} align="center" weight="semiBold">Follow us</H2>
      <div className={cn(styles.followUs, className)}>
        {linksData.map((card) => (
          <a style={{ maxWidth: '320px' }} href={card.href} key={card.id} target="_blank" rel="noonpener noreferrer">
            <FollowCard name={card.name} icon={<card.icon />} />
          </a>
        ))}
      </div>
    </WrapContainer>
  );
};
