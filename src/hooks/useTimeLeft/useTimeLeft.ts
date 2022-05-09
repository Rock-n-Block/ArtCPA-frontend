import { useEffect, useState } from 'react';
import { DateLike, Nullable } from 'types';
import { ITimeLeft } from './useTimeLeft.types';

const MILLISECONDS = 1;
const SECONDS = 1000 * MILLISECONDS;
const MINUTE = 60 * SECONDS;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
/**
 * Calculates time left from endTime to now
 * @param endTime
 * @returns {
 *     days:number;
 *     hours:number;
 *     minutes:number;
 *     seconds:number;
 * } | null
 */
export const useTimeLeft = (endTime:DateLike, onTimerOut?: () => void):Nullable<ITimeLeft> => {
  const calculateTimeLeft = ():ITimeLeft => {
    const dateEndTime = new Date(endTime);
    const difference = +dateEndTime - Date.now();
    let timeLeft:Nullable<ITimeLeft> = null;

    if (difference > 0) {
      let timeTracker = difference;
      const days = Math.floor(timeTracker / DAY);
      timeTracker -= days * DAY;
      const hours = Math.floor(timeTracker / HOUR);
      timeTracker -= hours * HOUR;
      const minutes = Math.floor(timeTracker / MINUTE);
      timeTracker -= minutes * MINUTE;
      const seconds = Math.floor(timeTracker / SECONDS);
      timeLeft = {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      onTimerOut?.();
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<Nullable<ITimeLeft>>(calculateTimeLeft());

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  });

  return timeLeft;
};
