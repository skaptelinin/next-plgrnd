'use client'
import { type FC } from 'react';

import dayjs from 'dayjs';

import { useRerender, useTimer } from './hooks';
import styles from './Clocks.module.css';

export const Clocks: FC<{ init: number }> = ({ init }) => {
  const time = useTimer(init);

  const rerender = useRerender();

  console.log('Clocks render');

  return (
    <div className={styles.clocks}>
      <p className={styles.init}>
        Init datetime: <time>{dayjs(init).format()}</time>
      </p>
      <p className={styles.now}>
        Current datetime: <time>{dayjs(time).format()}</time>
      </p>
      <button onClick={rerender} className={styles.rerender}>
        Rerender
      </button>
    </div>
  );
};
