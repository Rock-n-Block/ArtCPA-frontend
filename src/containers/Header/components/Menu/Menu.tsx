import { RefObject, VFC } from 'react';
import { Button, Modal } from 'components';
import { Link as RSLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import cn from 'clsx';

import { HomePageNavElement } from 'containers/Header/Header.helpers';
import styles from './styles.module.scss';
import { menuNavLinks, tableMenuNavLink } from './Menu.helper';

export interface MenuProps {
  anchorOrigin?: RefObject<HTMLElement>;
  isOpen: boolean;
  className?: string;
  isMobile?: boolean;
  onClose: () => void;
}

export const Menu: VFC<MenuProps> = ({
  anchorOrigin,
  isOpen,
  className,
  isMobile,
  onClose,
}) => {
  return (
    <Modal
      title="Menu"
      divider
      onClose={onClose}
      isOpen={isOpen}
      className={cn(styles.menu, className)}
      anchorOrigin={anchorOrigin}
    >
      {!isMobile && menuNavLinks.map(({ label, link }) => {
        return (
          <Button
            key={label}
            variant="text"
            to={link}
            className={styles.navLink}
          >
            {label}
          </Button>
        );
      })}
      {isMobile && tableMenuNavLink.map(({ label, link, isOuterLink, anchorId }: HomePageNavElement) => {
        if (isOuterLink) {
          return (
            <Button
              key={label}
              className={cn(styles.headerNav, styles.navLink)}
              href={link}
              variant="text"
              onClick={onClose}
            >
              {label}
            </Button>
          );
        }

        if (anchorId) {
          return (
            <RSLink
              key={label}
              smooth
              to={anchorId}
              className={styles.navLink}
              onClick={onClose}
            >
              <Button className={styles.headerNav} variant="text">{label}</Button>
            </RSLink>
          );
        }

        return (
          <Link to={link} className={styles.navLink}>
            <Button
              key={label}
              variant="text"
              onClick={onClose}
            >
              {label}
            </Button>
          </Link>
        );
      })}
    </Modal>
  );
};
