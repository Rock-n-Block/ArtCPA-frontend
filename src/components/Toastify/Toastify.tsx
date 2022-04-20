import { FC } from 'react';
import clsx from 'clsx';
import { InfoIcon, WarningIcon, ErrorIcon, SuccessIcon, CloseIcon } from 'assets/icons/icons/components/';
import styles from './styles.module.scss';

export type ToastifyProps = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  className?: string;
};

const toastifyHelper = {
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
  error: <ErrorIcon />,
};

export const Toastify: FC<ToastifyProps> = ({ type, message }) => {
  return (
    <div className={clsx(styles.toastify, styles[type], `${type}`)}>
      <div className={clsx(styles.startAdorment)}> {toastifyHelper[type]} </div>
      <div className={styles[`${type}Text`]}>{message}</div>
      <div className={clsx(styles.endAdorment, styles[`icon${type}`])}>
        <CloseIcon />
      </div>
    </div>

  );
};
