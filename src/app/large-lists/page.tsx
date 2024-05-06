import { type FC } from 'react';
import Link from 'next/link';

import styles from './LargeLists.module.css';
import { ROUTES } from '@/entities';

const LargeLists: FC = () => (
  <div className={styles['large-lists']}>
    <h1 className={styles['page-title']}>
      Large lists
    </h1>
    <Link href={`${ROUTES.largeLists}/client`}>
      <h2>Client list</h2>
    </Link>
    <Link href={`${ROUTES.largeLists}/server`}>
      <h2>Server list</h2>
    </Link>
  </div>
);

export default LargeLists;
