import { VFC, RefObject } from 'react';

import { Copyable, Modal, Text, Button } from 'components';

import cn from 'clsx';

import { SignOutIcon } from 'assets/icons/icons';
import styles from './styles.module.scss';

export interface DisconnectModalProps {
  address: string;
  anchorOrigin?: RefObject<HTMLElement>;
  isOpen: boolean;
  className?: string;
  onDisconnectClick: () => void;
  onClose: () => void;
}

export const DisconnectModal: VFC<DisconnectModalProps> = ({
  address,
  anchorOrigin,
  isOpen,
  className,
  onDisconnectClick,
  onClose,
}) => {
  return (
    <Modal
      anchorOrigin={anchorOrigin}
      className={cn(styles.disconnectModal, className)}
      isOpen={isOpen}
      onClose={onClose}
      title="Wallet"
      size="none"
    >
      <Copyable
        valueToCopy={address}
        onlyIconActive
        withBorder
      >
        <Text color="secondary">{address}</Text>
      </Copyable>
      <Button
        className={styles.disconnectBtn}
        onClick={onDisconnectClick}
        endAdorment={<SignOutIcon />}
      >
        Disconnect
      </Button>
    </Modal>
  );
};
