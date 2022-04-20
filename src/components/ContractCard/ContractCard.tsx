import { VFC } from 'react';
import { Card } from 'components/Card';
import cn from 'clsx';
import { H2 } from 'components';
import styles from './styles.module.scss';

export interface ContractCardProps {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
}

export const ContractCard: VFC<ContractCardProps> = ({ image, title, description, className }) => {
  return (
    <Card>
      <div className={cn(styles.titleWrapper, className)}>
        <H2 className={cn(styles.title)}>{title}</H2>
        {image && (
          <div className={styles.logo}>
            <img src={image} alt="" />
          </div>
        )}
      </div>
      <div className={styles.description}>{description}</div>
    </Card>
  );
};
