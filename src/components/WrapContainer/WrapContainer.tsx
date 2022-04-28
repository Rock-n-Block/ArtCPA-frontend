import { FC } from 'react';
import { Element } from 'react-scroll';

import cn from 'clsx';

import styles from './styles.module.scss';

export interface WrapContainerProps {
  name?: string;
  className?: string;
}

export const WrapContainer: FC<WrapContainerProps> = ({
  name,
  className,
  children,
}) => {
  return (
    <Element name={name} className={cn(styles.wrapContainer, className)}>
      {children}
    </Element>
  );
};
