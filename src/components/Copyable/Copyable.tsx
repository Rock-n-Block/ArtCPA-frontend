import React, { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import cn from 'clsx';

import { CopyIcon } from 'assets/icons/icons';
import styles from './styles.module.scss';

export type CopyableProps = {
  valueToCopy: string;
  onCopy?: () => void;
  withIcon?: boolean;
  className?: string;
  classNameIcon?: string;
  withBorder?: boolean;
  onlyIconActive?: boolean;
  transparent?: boolean;
  zeroPadding?: boolean;
};

export const Copyable: FC<CopyableProps> = ({
  valueToCopy,
  onCopy = () => {},
  children,
  withIcon,
  className,
  classNameIcon,
  withBorder,
  onlyIconActive = false,
  transparent = false,
  zeroPadding = false,
}) => {
  if (onlyIconActive) {
    return (
      <div
        className={cn(
          styles.copyableContainer,
          { [styles.transparent]: transparent },
          { [styles.withBorder]: withBorder },
          className,
        )}
        style={{ padding: zeroPadding ? '0px 52px 0px 0px' : '' }}
      >
        {children}
        <CopyToClipboard
          text={valueToCopy}
          onCopy={() => {
            onCopy();
            // setNotification({
            //   type: 'success',
            //   message: 'Value copied',
            // });
          }}
          className={cn(styles.icon)}
        >
          <CopyIcon />
        </CopyToClipboard>
      </div>
    );
  }
  return (
    <CopyToClipboard
      text={valueToCopy}
      onCopy={() => {
        onCopy();
        // setNotification({
        //   type: 'success',
        //   message: 'Value copied',
        // });
      }}
    >
      <div className={cn(withIcon && styles.withIcon, className)}>
        {children}
        {withIcon && (
          <div className={cn(styles.icon, classNameIcon)}>
            <CopyIcon />
          </div>
        )}
      </div>
    </CopyToClipboard>
  );
};
