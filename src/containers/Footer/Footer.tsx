import { VFC } from 'react';
import { Button } from 'components';
import cn from 'clsx';
import { Logo } from 'components/Logo';
import { WrapContainer } from 'components/WrapContainer';
import { homePageNavigation } from 'containers/Header/Header.helpers';
import { Link as RSLink } from 'react-scroll';
import styles from './styles.module.scss';

export interface FooterProps {
  className?: string;
}

export const Footer: VFC<FooterProps> = ({ className }) => {
  return (
    <WrapContainer>
      <footer className={cn(styles.footer, className)}>
        <Logo />
        <div className={styles.linksWrapper}>
          {homePageNavigation.map(({ label, anchorId, isOuterLink, link }) => {
            if (isOuterLink) {
              return (
                <Button key={label} className={styles.headerNav} href={link} variant="text">{label}</Button>
              );
            }
            return (
              <RSLink key={label} smooth to={anchorId} delay={0} className={styles.navLink}>
                <Button className={styles.headerNav} variant="text">{label}</Button>
              </RSLink>
            );
          })}
        </div>
      </footer>
    </WrapContainer>
  );
};
