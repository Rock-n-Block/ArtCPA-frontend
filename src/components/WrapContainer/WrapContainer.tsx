import { FC, useEffect } from 'react';
// import { Element } from 'react-scroll';

import cn from 'clsx';

import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div id={name?.slice(2)} className={cn(styles.wrapContainer, className)}>
      {children}
    </div>
  );
};
