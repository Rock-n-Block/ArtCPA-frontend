import { useState, VFC } from 'react';

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

  const handleButtonClick = () => {
    setIsClicked(true);
  };
  return (
    <WrapContainer className={cn(styles.mainVideo, className)}>
      {isClicked ? (
        <video controls className={styles.video}>
          <source src={src} />
          <track kind="captions" />
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
