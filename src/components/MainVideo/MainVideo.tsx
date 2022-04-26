import { useState, VFC } from 'react';

import cn from 'clsx';
import { Button } from 'components';
import { rectangle } from 'assets/img/icons';
import { YouTubeLogo, Polygon } from 'assets/icons/icons';
import { WrapContainer } from 'components/WrapContainer';
import styles from './styles.module.scss';

export interface MainVideoProps {
  className?: string;
}

export const MainVideo: VFC<MainVideoProps> = ({ className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };
  const youtubeLink = 'https://www.youtube.com/embed/LHaxLygUgkE';
  return (
    <WrapContainer className={cn(styles.mainVideo, className)}>
      {isClicked ? (
        <iframe
          width="100%"
          height="100%"
          src={`${youtubeLink}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className={styles.preview}>
          <img src={rectangle} alt="video preview" />
          <Button className={styles.button} variant="text" onClick={handleButtonClick}>
            <YouTubeLogo />
            <Polygon />
          </Button>
        </div>
      )}
    </WrapContainer>
  );
};
