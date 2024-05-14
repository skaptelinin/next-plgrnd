import { type FC } from 'react';
import Link from 'next/link';

import { ROUTES } from '@/entities/routes';

import styles from './LargeLists.module.css';

const LargeLists: FC = () => (
  <div className={styles['large-lists']}>
    <h1 className={styles['page-title']}>
      Large lists
    </h1>
    <Link href={`${ROUTES.largeLists}/pure-client`}>
      <h2>Pure client list</h2>
    </Link>
    <Link href={`${ROUTES.largeLists}/server`}>
      <h2>Server list</h2>
    </Link>
    <Link href={`${ROUTES.largeLists}/mixed`}>
      <h2>Mixed list</h2>
    </Link>
  </div>
);

export default LargeLists;
