import { VFC } from 'react';

import cn from 'clsx';
import { H3 } from 'components';
import styles from './styles.module.scss';

export interface ProgressBarProps {
  className?: string;
  text?: string;
  maxValue: number;
  currentValue: number;
}

export const ProgressBar: VFC<ProgressBarProps> = ({ className, text, currentValue, maxValue }) => {
  const currentWidth = (currentValue * 100) / maxValue;
  return (
    <div className={cn(styles.progressBar, className)} style={{ background: `linear-gradient(to right, #fff 0%, #fff ${currentWidth}%, #575758 ${currentWidth}%, #575758` }}>
      <H3 align="center" className={styles.title}>{text}</H3>
      <div style={{ width: `${currentWidth}%` }} className={styles.progress} />
    </div>
  );
};
