import { sleep } from '@/shared';
import { Client } from '@/app/combined-page/_widgets/CombinedComp/Client/Client';
import { ServerChild } from '@/app/combined-page/_widgets/CombinedComp/ServerChild';

import styles from './CombinedComp.module.css';

export const CombinedComp = async () => {
  await sleep(1_000);

  return (
    <div className={styles.wrapper}>
      I am mixed component
      <Client initCount={10}>
        <ServerChild />
      </Client>
    </div>
  )
}
