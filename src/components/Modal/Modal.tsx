import { FC, useEffect } from 'react';

import cn from 'clsx';
import { Card } from 'components/Card';
import { CloseIcon } from 'assets/icons/icons/components';
import { Text } from 'components/Typography';
import { CardSize } from 'components/Card/Card.types';
import { Button } from 'components/Button';
import styles from './styles.module.scss';

export interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: (...args: unknown[]) => void;
  isBackground?: boolean;
  isDisabledScroll?: boolean;
  size?: CardSize;
  title?: string;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isOpen,
  isBackground = true,
  isDisabledScroll = true,
  title,
  onClose,
  size,
}) => {
  useEffect(() => {
    const { body } = document;
    if (isDisabledScroll && isOpen) {
      body.style.setProperty('overflow', 'hidden');
    } else {
      body.style.setProperty('overflow', 'visible');
    }
  }, [isDisabledScroll, isOpen, size]);
  return (
    <>
      <div
        className={cn(
          styles.modalOutside,
          { [styles.closed]: !isOpen },
          { [styles.backgroundColor]: isBackground },
        )}
        onClick={onClose}
      />
      <Card
        size={size}
        className={cn(
          styles.modalContent,
          { [styles.closed]: !isOpen },
          className,
        )}
      >
        <div className={styles.modalHeader}>
          <Text size="l">
            {title}
          </Text>
          <Button variant="text" className={styles.closeButton} onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        {children}
      </Card>
    </>
  );
};
