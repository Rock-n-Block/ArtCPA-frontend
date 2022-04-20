import { FC } from 'react';

import cn from 'clsx';

import styles from './styles.module.scss';
import { CardSize } from './Card.types';

export interface CardProps {
  size?: CardSize;
  isHoverEffect?: boolean;
  className?: string;
}
export const Card: FC<CardProps> = ({
  size = 'md',
  isHoverEffect = false,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        { [styles.hoverEffect]: isHoverEffect },
        styles[size],
        styles.wrapper,
        className,
      )}
    >
      {children}
    </div>
  );
};
