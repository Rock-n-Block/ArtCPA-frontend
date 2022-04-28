import { VFC } from 'react';
import { Button } from 'components';
import cn from 'clsx';
import { Logo } from 'components/Logo';
import { WrapContainer } from 'components/WrapContainer';
import { footerLinks } from './links';
import styles from './styles.module.scss';

export interface FooterProps {
  className?: string;
}

export const Footer: VFC<FooterProps> = ({ className }) => {
  return (
    <WrapContainer className={cn(styles.footer, className)}>
      <footer>
        <Logo className={cn(styles.mainLogo)} />
        <div className={styles.linksWrapper}>
          {footerLinks.map((link) => (
            <Button variant="text" href={link.href} key={link.id}>{link.name}</Button>
          ))}
        </div>
      </footer>
    </WrapContainer>
  );
};
