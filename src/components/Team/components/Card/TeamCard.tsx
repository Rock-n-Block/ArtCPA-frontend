import { VFC } from 'react';

import cn from 'clsx';
import { H3, Text } from 'components/Typography';
import styles from './styles.module.scss';
import { CardSize } from './TeamCard.types';

export interface TeamCardProps {
  size?: CardSize;
  isHoverEffect?: boolean;
  className?: string;
  image: string;
  personName: string;
  personPosition: string;
}
export const TeamCard: VFC<TeamCardProps> = ({ className, image, personName, personPosition,
}) => {
  return (
    <div className={cn(className, styles.root)}>
      <img src={image} alt="Person" />
      <H3 weight="semiBold">{personName}</H3>
      <Text size="m">{personPosition}</Text>
    </div>
  );
};
