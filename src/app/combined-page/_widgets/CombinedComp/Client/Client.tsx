'use client'
import { useState, FC, ReactElement } from 'react';

import styles from './Client.module.css';

export const Client: FC<{ initCount: number, children: ReactElement }> = ({ initCount, children }) => {
  const [count, setCount] = useState<number>(initCount);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles['counter-btn']}
        onClick={() => setCount(val => ++val)}
      >
        Interactive counter:
        {' '}
        {count}
      </button>
      <label>
        Toggle server component
        <input
          type="checkbox"
          checked={visible}
          onChange={() => setVisible((val) => !val)}
        />
      </label>
      <div>
        Here should be nested server component
        <div>
          {visible && children}
        </div>
      </div>
    </div>
  );
}
