import { VFC } from 'react';

import cn from 'clsx';
import { H1, H2, Text } from 'components';
import { Card } from 'components/Card';
import { WrapContainer } from 'components/WrapContainer';
import { aboutUsHelper } from './AboutUs.helper';
import styles from './styles.module.scss';

export interface AboutUsProps {
  className?: string;
}

export const AboutUs: VFC<AboutUsProps> = ({ className }) => {
  return (
    <WrapContainer>
      <H1 align="center" className={cn(className, styles.mainTitle)}>About us</H1>
      <div className={styles.wrapperCard}>
        {aboutUsHelper.map((card) => (
          <div className={styles.cardWrapper}>
            <Card size="sm" className={styles.cardItem} key={card.id}>
              <H2 className={styles.title} weight="semiBold">{card.title}</H2>
              <Text size="m" className={styles.description} noWrap={false} weight="light">{card.description}</Text>
            </Card>

          </div>
        ))}
      </div>
    </WrapContainer>
  );
};
