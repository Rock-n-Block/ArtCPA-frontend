import { VFC } from 'react';

import cn from 'clsx';
import { H1, H2, Text } from 'components';
import { Card } from 'components/Card';
import { aboutUsHelper } from './AboutUs.helper';
import styles from './styles.module.scss';

export interface AboutUsProps {
  className?: string;
}

export const AboutUs: VFC<AboutUsProps> = ({ className }) => {
  return (
    <div className={cn(styles.aboutUs, className)}>
      <H1 align="center" className={styles.mainTitle}>About us</H1>
      <div className={styles.wrapperCard}>
        {aboutUsHelper.map((card) => (
          <Card size="sm" className={styles.cardItem}>
            <H2 className={styles.title}>{card.title}</H2>
            <Text size="m">{card.description}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
};
