/* eslint-disable import/no-absolute-path */
import { ReactElement, VFC } from 'react';

import cn from 'clsx';

import { NavLink } from 'react-router-dom';
import { Parser } from '/assets/icons/icons/components/BreadcrumbsComingSoon/ArrowIcon.svg';
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

export const BreadcrumbsComingSoon: VFC<BreadcrumbsComingSoonProps> = ({ paths }) => {
  return (
    <nav className={cn(styles.breadcrumbs)}>
      <ul className={cn(styles.breadcrumbsContainer)}>
        {paths.length > 1 &&
          paths.map(({ label, path }, index) => (
            <>
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
              {
                index + 1 !== paths.length && (
                  <img src={Parser} alt="parser" />
                )
              }
            </>

          ))}
      </ul>
    </nav>
  );
};
