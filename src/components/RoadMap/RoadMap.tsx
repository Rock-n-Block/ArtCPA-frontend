import { VFC } from 'react';

import cn from 'clsx';

import { H1, Text } from 'components/Typography';
import { WrapContainer } from 'components/WrapContainer';
import { CheckIcon } from 'assets/icons/icons';
import { HomePageAnchors } from 'containers/Header/Header.helpers';
import styles from './styles.module.scss';
import { content } from './Roadmap.helper';

export interface RoadMapProps {
  className?: string;
}

function pad(d) {
  return (d < 10) ? `0${d.toString()}` : d.toString();
}

export const RoadMap: VFC<RoadMapProps> = ({ className }) => {
  return (
    <WrapContainer name={HomePageAnchors.ROAD_MAP} className={cn(styles.roadMap, className)}>
      <H1 className={styles.header} align="center" weight="bold">Road map</H1>
      {content.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={styles.contentItems}>
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
    </WrapContainer>
  );
};
