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
  onTimerOut?: () => void;
}

export const Countdown: VFC<CountdownProps> = ({
  endAuction,
  auctionEndText,
  isNftCard = false,
  className,
  onTimerOut,
}) => {
  const timeLeft = useTimeLeft(endAuction * 1000, onTimerOut);

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
    <div className={cn(styles.notCard, className)}>
      <div className={styles.timeBlock}>
        <Text>
          <H2 weight="mediumHeight">{days}</H2>
        </Text>
        <Text weight="mediumHeight" className={styles.time}>Days</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          <H2 weight="mediumHeight">{hours}</H2>
        </Text>
        <Text weight="mediumHeight" className={styles.time}>Hours</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          <H2 weight="mediumHeight">{minutes}</H2>
        </Text>
        <Text weight="mediumHeight" className={styles.time}>Minutes</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          <H2 weight="mediumHeight">{seconds}</H2>
        </Text>
        <Text weight="mediumHeight" className={styles.time}>Seconds</Text>
      </div>
    </div>
  );
};
