import React, { VFC } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export interface DividerProps {
  className?: string;
}

export const Divider: VFC<DividerProps> = ({ className }) => {
  return <hr className={clsx(styles.divider, className)} />;
};
