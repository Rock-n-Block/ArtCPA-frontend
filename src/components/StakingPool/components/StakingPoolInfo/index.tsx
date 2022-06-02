import { H2, Text } from 'components';
import { VFC } from 'react';

import styles from './styles.module.scss';

interface IOwnerMenu{
  value: String;
  description: String;
}

export const StakingPoolInfo:VFC<IOwnerMenu> = ({ value, description }) => {
  return(
    <div className={styles.infoStyle}>
      <Text>
        <H2 weight="mediumHeight">{value}</H2>
      </Text>
      <Text weight="mediumHeight" className={styles.time}>{description}</Text>
    </div>
  );
};
