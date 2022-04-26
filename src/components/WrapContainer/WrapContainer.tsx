import { FC } from 'react';

import cn from 'clsx';

import styles from './styles.module.scss';

export interface WrapContainerProps {
  className?: string;
}

export const WrapContainer: FC<WrapContainerProps> = ({ className, children }) => {
  return (
    <div className={cn(styles.wrapContainer, className)}>
      {children}
    </div>
  );
};
