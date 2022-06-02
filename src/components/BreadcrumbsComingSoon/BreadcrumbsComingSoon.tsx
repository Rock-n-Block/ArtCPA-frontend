/* eslint-disable import/no-absolute-path */
import { ReactElement, VFC } from 'react';

import cn from 'clsx';

import { NavLink } from 'react-router-dom';
import { ArrowIcon } from 'assets/icons/icons';
import styles from './styles.module.scss';

export type BreadcrumbsComingSoonPaths = {
  path: string;
  label: string;
  icon?: ReactElement;
};
export type BreadcrumbsComingSoonProps = {
  paths: BreadcrumbsComingSoonPaths[];
  className?: string;
};

export const BreadcrumbsComingSoon: VFC<BreadcrumbsComingSoonProps> = ({ paths, className }) => {
  return (
    <nav className={cn(styles.breadcrumbs, className)}>
      <ul className={cn(styles.breadcrumbsContainer)}>
        {paths.length > 1 &&
          paths.map(({ label, path, icon }, index) => (
            <span className={styles.container} key={path}>
              {icon}
              <li
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
              {
                index + 1 !== paths.length && (
                  <ArrowIcon className={styles.parser} />
                )
              }
            </span>

          ))}
      </ul>
    </nav>
  );
};
