import { type FC, type ReactNode } from 'react';

import { NavBar } from '@/features/NavBar/NavBar';

import styles from './Header.module.css';

export const Header: FC<{ headerSlot?: ReactNode }> = ({ headerSlot }) => (
  <header className={styles.header}>
    <NavBar />
    {headerSlot}
  </header>
);
