import { FC, useEffect, RefObject } from 'react';

import cn from 'clsx';
import { Card, Text, Button } from 'components';
import { CloseIcon } from 'assets/icons/icons/components';
import { CardSize } from 'components/Card/Card.types';
import styles from './styles.module.scss';

export interface ModalProps {
  className?: string;
  isOpen: boolean;
  divider?: boolean;
  onClose: (...args: unknown[]) => void;
  isBackground?: boolean;
  isDisabledScroll?: boolean;
  size?: CardSize;
  title?: string;
  anchorOrigin?: RefObject<HTMLElement>;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isOpen,
  divider = false,
  isBackground = true,
  isDisabledScroll = true,
  title = '',
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
          styles.modal,
          { [styles.closed]: !isOpen },
          className,
        )}
      >
        <div className={cn(styles.modalHeader, { [styles.divider]: divider })}>
          <Text size="l" weight="bold">
            {title}
          </Text>
          <Button
            icon={<CloseIcon />}
            size="noSize"
            variant="outlined"
            className={styles.closeButton}
            onClick={onClose}
          />
        </div>
        {children}
      </Card>
    </>
  );
};
