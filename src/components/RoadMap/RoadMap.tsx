import { VFC } from 'react';

import cn from 'clsx';

import { H1, Text } from 'components/Typography';
import { CheckIcon } from 'assets/icons/icons';
import styles from './styles.module.scss';

export interface RoadMapProps {
  className?: string;
  content?: {
    title: string;
    points: string[];
  }[]
}

function pad(d) {
  return (d < 10) ? `0${d.toString()}` : d.toString();
}

export const RoadMap: VFC<RoadMapProps> = ({ className, content }) => {
  return (
    <div className={cn(styles.roadMap, className)}>
      <H1 className={styles.header} align="center" weight="bold">Road map</H1>
      {content.map((item, index) => (

        <div className={styles.contentItems}>
          {index === content.length - 1 && index !== 0 && (
            <div className={styles.dividerBetweenItems} />
          )}
          <div className={styles.indexContainer}>
            <H1 align="center" weight="bold" className={styles.index}>
              {pad(index + 1)}
            </H1>
          </div>
          <div className={styles.dividerInsideContainer} />

          <div className={styles.content}>
            <H1 align="center" weight="bold" className={styles.title}>{item.title}</H1>
            <div className={styles.points}>
              {item.points.map((point) => (
                <div className={styles.point}>
                  <CheckIcon />
                  <Text size="m"> {point} </Text>
                </div>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};
