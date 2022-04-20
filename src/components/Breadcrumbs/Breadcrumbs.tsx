import { VFC } from 'react';

import cn from 'clsx';

import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export type BreadcrumbsPaths = {
  path: string;
  label: string;
};
export type BreadcrumbsProps = {
  paths: BreadcrumbsPaths[];
  className?: string;
};

export const Breadcrumbs: VFC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <nav className={cn(styles.breadcrumbs)}>
      <ul className={cn(styles.breadcrumbsContainer)}>
        {paths.length > 1 &&
          paths.map(({ label, path }, index) => (
            <li
              key={path}
              className={
                cn(
                  { [styles.breadcrumbFirst]: !index }, { [styles.breadcrumbLast]: paths.length - 1 === index },
                  { [styles.breadcrumb]: index && paths.length - 1 !== index },
                )
            }
            >
              <NavLink
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
