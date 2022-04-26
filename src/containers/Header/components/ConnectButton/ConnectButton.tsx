import { VFC } from 'react';

import { Button } from 'components/Button';

import { WalletIcon } from 'assets/icons/icons';
import { ConnectModal } from '../ConnectModal';
import { DisconnectModal } from '../DisconnectModal';

export interface ConnectButtonProps {
  isOpen: boolean;
  isMobile: boolean;
  address: string;
  onOpenModal: () => void;
  onCloseModal: () => void;
  onDisconnect: () => void;
  className?: string;
}

export const ConnectButton: VFC<ConnectButtonProps> = ({
  onOpenModal,
  onCloseModal,
  onDisconnect,
  isOpen,
  isMobile,
  address,
}) => {
  return (
    <>
      {isMobile ? (
        <Button
          icon={<WalletIcon />}
          onClick={onOpenModal}
          variant="filled-secondary"
        />
      ) : (
        <Button
          onClick={onOpenModal}
          variant="filled"
        >
          Connect to wallet
        </Button>
      )}
      {address.length ? (
        <DisconnectModal
          address={address}
          isOpen={isOpen}
          onDisconnectClick={onDisconnect}
          onClose={onCloseModal}
        />
      ) : (
        <ConnectModal
          isOpen={isOpen}
          onClose={onCloseModal}
        />
      )}
    </>
  );
};
