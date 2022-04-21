import { VFC } from 'react';

import cn from 'clsx';
import { H3, Text } from 'components/Typography';
import styles from './styles.module.scss';
import { CardSize } from './Card.types';

export interface CardProps {
  size?: CardSize;
  isHoverEffect?: boolean;
  className?: string;
  image: string;
  personName: string;
  personPosition: string;
}
export const Card: VFC<CardProps> = ({ className, image, personName, personPosition,
}) => {
  return (
    <div className={cn(className, styles.root)}>
      <img src={image} alt="" />
      <H3 weight="semiBold">{personName}</H3>
      <Text size="m">{personPosition}</Text>
    </div>
  );
};
