import { VFC } from 'react';

import cn from 'clsx';
import { H3, Text } from 'components/Typography';
import styles from './styles.module.scss';
import { CardSize } from './TeamCard.types';

export interface CardDataProps {
  cardData: {
    image: string;
    personName: string;
    personPosition: string;
  };
}
export interface TeamCardProps {
  size?: CardSize;
  isHoverEffect?: boolean;
  className?: string;
  cardData: {
    image: string;
    personName: string;
    personPosition: string;
  };

}
export const TeamCard: VFC<TeamCardProps> = ({ className, cardData,
}) => {
  return (
    <div className={cn(className, styles.root)}>
      <img src={cardData.image} alt="Person" />
      <H3 weight="semiBold">{cardData.personName}</H3>
      <Text size="m">{cardData.personPosition}</Text>
    </div>
  );
};
