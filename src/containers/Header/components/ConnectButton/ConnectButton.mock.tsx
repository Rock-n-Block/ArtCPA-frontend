import { noop } from 'lodash';
import { ConnectButtonProps } from './ConnectButton';

export const menuButtonPropsMocked: ConnectButtonProps = {
  isMobile: false,
  isOpen: false,
  onOpenModal: noop,
  onCloseModal: noop,
  address: '1312312321',
  onDisconnect: noop,
};
