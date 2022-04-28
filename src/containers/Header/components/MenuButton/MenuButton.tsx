import { VFC, useState, useRef } from 'react';

import { Button } from 'components/Button';

import { MenuIcon } from 'assets/icons/icons';
import { Menu } from 'containers/Header/components';
import { Nullable } from 'types';
import styles from './styles.module.scss';

export interface MenuButtonProps {
  isMobile: boolean;
  className?: string;
}

export const MenuButton: VFC<MenuButtonProps> = ({ isMobile }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuButtonRef = useRef<Nullable<HTMLButtonElement>>(null);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return (
    <div className={styles.mobileButtonWrapper}>
      {isMobile ? (
        <Button
          icon={<MenuIcon />}
          btnRef={menuButtonRef}
          onClick={openMenu}
          variant="filled"
        />
      ) : (
        <Button
          endAdorment={<MenuIcon />}
          onClick={openMenu}
          btnRef={menuButtonRef}
          className={styles.menuButton}
        >
          Menu
        </Button>
      )}
      <Menu
        anchorOrigin={menuButtonRef}
        isOpen={isMenuOpen}
        onClose={closeMenu}
        isMobile={isMobile}
      />
    </div>
  );
};
