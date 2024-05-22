'use client'
import { type FC } from 'react';

import { Date } from '@/features/Clocks/Date/Date';
import { useRerender, useTimer } from '../hooks';
import styles from './ClientClocks.module.css';

export const ClientClocks: FC<{ init: number }> = ({ init }) => {
  const time = useTimer(init);

  const rerender = useRerender();

  console.log('Clocks render');

  return (
    <div className={styles.clocks}>
      <p className={styles.init}>
        Init datetime: <Date date={init} />
      </p>
      <p className={styles.now}>
        Current datetime: <Date date={time} />
      </p>
      <button onClick={rerender} className={styles.rerender}>
        Rerender
      </button>
    </div>
  );
};
