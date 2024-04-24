import { type FC, type ReactNode } from 'react';

import styles from './Danger.module.css';

export const Danger: FC<{ children: ReactNode }> = ({ children }) => (
  <h1 className={styles.danger}>
    {children}
  </h1>
);
