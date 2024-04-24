import { sleep } from '@/shared';
import { ClientPart } from '@/app/combined-page/_widgets/CombinedComp/ClientPart/ClientPart';
import { ServerChild } from '@/app/combined-page/_widgets/CombinedComp/ServerChild';

import styles from './CombinedComp.module.css';

export const CombinedComp = async () => {
  await sleep(1_000);

  return (
    <div className={styles.wrapper}>
      I am mixed component
      <ClientPart initCount={10}>
        <ServerChild />
      </ClientPart>
    </div>
  )
}
