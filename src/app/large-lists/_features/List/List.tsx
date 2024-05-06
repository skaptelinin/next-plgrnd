import { type FC } from 'react';
import Link from 'next/link';

import { ROUTES } from '@/entities';

import { ListItem } from '../../_shared';
import styles from './List.module.css';

export const List: FC<{
  items: ListItem[];
  listType: 'client' | 'server';
}> = ({ items, listType }) => (
  <article className={styles['list-template']}>
    <Link href={ROUTES.largeLists} className={styles['back-link']}>
      Back
    </Link>
    <h2>
      {listType === 'client' ? 'Client large list' : 'Server large list'}
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
