import { VFC } from 'react';
import { useTimeLeft } from 'hooks/useTimeLeft';
import cn from 'clsx';
import { H2, Text } from 'components';
import styles from './styles.module.scss';

export interface CountdownProps {
  endAuction: number;
  auctionEndText: string;
  isNftCard?: boolean;
  className?: string;
}

export const Countdown: VFC<CountdownProps> = ({
  endAuction,
  auctionEndText,
  isNftCard = false,
  className,
}) => {
  const timeLeft = useTimeLeft(endAuction * 1000);

  if (!timeLeft) {
    return <Text tag="span" align="center">{auctionEndText}</Text>;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  if (isNftCard) {
    return (
      <Text className={cn(className, 'white s')}>
        <Text tag="span">
          {hours}h
        </Text>
        <Text tag="span">
          {minutes}m:
        </Text>
        <Text tag="span">
          {seconds}s
        </Text>
      </Text>
    );
  }

  return(
    <div className={cn(styles.countdown, styles.notCard, className)}>
      <div className={styles.timeBlock}>
        <Text>
          <H2 weight="mediumHeight">{days}</H2>
        </Text>
        <Text weight="mediumHeight">Days</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          <H2 weight="mediumHeight">{hours}</H2>
        </Text>
        <Text weight="mediumHeight">Hours</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          <H2 weight="mediumHeight">{minutes}</H2>
        </Text>
        <Text weight="mediumHeight">Minutes</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          <H2 weight="mediumHeight">{seconds}</H2>
        </Text>
        <Text weight="mediumHeight">Seconds</Text>
      </div>
    </div>
  );
};
