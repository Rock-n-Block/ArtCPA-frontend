import { CSSProperties, FC, RefObject } from 'react';

import cn from 'clsx';

import styles from './styles.module.scss';
import { CardSize } from './Card.types';

export interface CardProps {
  size?: CardSize;
  isHoverEffect?: boolean;
  className?: string;
  style?: CSSProperties;
  cardRef?: RefObject<HTMLDivElement>;
}
export const Card: FC<CardProps> = ({
  size = 'md',
  isHoverEffect = false,
  children,
  className,
  style,
  cardRef,
}) => {
  return (
    <div
      className={cn(
        { [styles.hoverEffect]: isHoverEffect },
        styles[size],
        styles.wrapper,
        className,
      )}
      style={style}
      ref={cardRef}
    >
      {children}
    </div>
  );
};
