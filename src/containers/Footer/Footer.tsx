import { VFC } from 'react';
import { H3, H2, Button } from 'components';
import cn from 'clsx';
import { Coin } from 'assets/icons/icons';
import { footerLinks } from './links';
import styles from './styles.module.scss';

export interface FooterProps {
  className?: string;
}

export const Footer: VFC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn(styles.footer, className)}>
      <div className={styles.coinWrapper}>
        <Coin className={styles.coin} />
        <div>
          <H2>ArtCPAclub</H2>
          <H3>Art & Blockchain</H3>
        </div>
      </div>
      <div className={styles.linksWrapper}>
        {footerLinks.map((link) => (
          <Button variant="text" href={link.href}>{link.name}</Button>
        ))}
      </div>
    </footer>
  );
};
