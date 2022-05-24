import { useCallback, useEffect, useRef, useState } from 'react';
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
  const timer = useRef<NodeJS.Timer | null>(null);
  const [timeLeft, setTimeLeft] = useState<Nullable<ITimeLeft>>(null);

  const calculateTimeLeft = useCallback((endTime: number) => {
    const difference = endTime - Date.now();
    if (difference > 0) {
      let timeTracker = difference;
      const days = Math.floor(timeTracker / DAY);
      timeTracker -= days * DAY;
      const hours = Math.floor(timeTracker / HOUR);
      timeTracker -= hours * HOUR;
      const minutes = Math.floor(timeTracker / MINUTE);
      timeTracker -= minutes * MINUTE;
      const seconds = Math.floor(timeTracker / SECONDS);
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    } else if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      setTimeout(() => {
        onTimerOut?.();
      }, 1000);
    }
  }, [onTimerOut]);

  useEffect(() => {
    if(!timer.current) {
      timer.current = setInterval(() => {
        calculateTimeLeft(+endTime);
      }, 1000);
    }
  }, [calculateTimeLeft, endTime]);

  return timeLeft;
};
