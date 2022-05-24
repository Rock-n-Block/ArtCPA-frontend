import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import clsx from 'clsx';

import styles from '../src/assets/styles/index.scss';

const MainDecorator = (story) => {
  const [islight, setIsLight] = useState(false);

  const handleSwitchTheme = useCallback(() => {
    setIsLight(!islight);
  }, [islight]);

  return (
    <>
      <button onClick={handleSwitchTheme}>Change theme</button>
      <div className={clsx(styles.app, { [styles.light]: islight })} style={{ background: '#141417' }}>
        <Router>
          {story()}
        </Router>
      </div>
    </>
  );
};

addDecorator(MainDecorator);

export const parameters = { layout: 'fullscreen' };
