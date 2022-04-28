import { VFC } from 'react';
import { useTimeLeft } from 'hooks/useTimeLeft';
import cn from 'clsx';
import { Text } from 'components';
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
          {hours}h:
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
          {days}13
        </Text>
        <Text>Days</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          {hours}
        </Text>
        <Text>Hours</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          {minutes}
        </Text>
        <Text>Minutes</Text>
      </div>
      <div className={styles.timeBlock}>
        <Text>
          {seconds}
        </Text>
        <Text>Seconds</Text>
      </div>
    </div>
  );
};
