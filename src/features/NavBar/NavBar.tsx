import { type FC } from 'react';
import Link from 'next/link';

import { ROUTES } from '@/entities';

import styles from './NavBar.module.css';

const PAGES_MAP: Record<ROUTES, string> = {
  [ROUTES.home]: 'Home',
  [ROUTES.serverCascade]: 'Server cascade',
  [ROUTES.client]: 'Client page',
  [ROUTES.combinedPage]: 'Combined page',
};

export const NavBar: FC = () => (
  <nav>
    <ul className={styles['menu-list']}>
      {Object.entries(PAGES_MAP).map(([route, title]) => (
        <li key={route}>
          <Link href={route}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
