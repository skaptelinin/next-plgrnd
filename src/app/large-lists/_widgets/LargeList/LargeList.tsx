import { type FC } from 'react';
import Link from 'next/link';

import { ROUTES } from '@/entities/routes';

import { ListItem } from '../../_shared';
import styles from './LargeList.module.css';

export const LargeList: FC<{
  items: ListItem[];
  listType: 'useClient' | 'pureClient' | 'server';
}> = ({ items, listType }) => {
  console.log('render LargeList');
  return (
    <article className={styles['list-template']}>
      <Link href={ROUTES.largeLists} className={styles['back-link']}>
        Back
      </Link>
      <h2>
        {{
          useClient: 'Use client large list',
          pureClient: 'Pure client large list',
          server: 'Server large list',
        }[listType]}
      </h2>
      <ul className={styles.list}>
        {items.map(({ title, description }, index) => (
          <li key={index} className={styles['list-item']}>
            <strong>{title}</strong>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
