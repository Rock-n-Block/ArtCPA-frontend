import { useRef, useState, VFC, useCallback, useEffect } from 'react';

import cn from 'clsx';
import { Button } from 'components';
import { rectangle } from 'assets/img/icons';
import { WrapContainer } from 'components/WrapContainer';
import { YouTubeLogo, Polygon } from 'assets/icons/icons';
import styles from './styles.module.scss';
// @ts-ignore
import src from '../../assets/Nature-Elements-by-CP.mp4';

export interface MainVideoProps {
  className?: string;
}

export const MainVideo: VFC<MainVideoProps> = ({ className }) => {
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleButtonClick = useCallback(() => {
    setIsClicked(true);
  }, []);

  useEffect(() => {
    if(isClicked && videoRef.current) {
      videoRef.current.play();
    }
  }, [isClicked, videoRef.current]);

  const handleVideoClick = useCallback(() => {
    setIsClicked(false);
  }, []);

  return (
    <WrapContainer className={cn(styles.mainVideo, className)}>
      {isClicked ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video onClick={handleVideoClick} ref={videoRef} loop className={styles.video}>
          <source src={src} />
        </video>
      ) : (
        <div className={styles.preview}>
          <img src={rectangle} alt="video preview" className={styles.preview} />
          <Button className={styles.button} variant="text" onClick={handleButtonClick}>
            <YouTubeLogo />
            <Polygon className={styles.polygon} />
          </Button>
        </div>
      )}
    </WrapContainer>
  );
};
