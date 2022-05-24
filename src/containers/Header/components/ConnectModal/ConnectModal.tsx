import { VFC, RefObject } from 'react';

import { Modal } from 'components';

import { DappUI } from '@elrondnetwork/dapp-core';

import cn from 'clsx';

import { hasElrondExtension } from 'utils';
import styles from './styles.module.scss';
import './styles.scss';

const {
  ExtensionLoginButton,
  WebWalletLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton,
} = DappUI;

export interface ConnectModalProps {
  anchorOrigin?: RefObject<HTMLElement>;
  isOpen: boolean;
  className?: string;
  onClose: () => void;
}

export const ConnectModal: VFC<ConnectModalProps> = ({
  anchorOrigin,
  isOpen,
  className,
  onClose,
}) => {
  return (
    <Modal
      anchorOrigin={anchorOrigin}
      className={cn(styles.connectModal, className)}
      isOpen={isOpen}
      onClose={onClose}
      title="Connect a wallet"
      size="none"
    >
      <ExtensionLoginButton callbackRoute="/" buttonClassName={hasElrondExtension ? styles.connectButton : 'extension-login_noExtensionButtonWrapper'} />
      <WebWalletLoginButton callbackRoute="/" buttonClassName={styles.connectButton} />
      <LedgerLoginButton callbackRoute="/" buttonClassName={styles.connectButton} />
      <WalletConnectLoginButton callbackRoute="/" buttonClassName={styles.connectButton} />
    </Modal>
  );
};
