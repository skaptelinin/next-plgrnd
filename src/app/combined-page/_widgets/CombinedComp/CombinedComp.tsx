import { sleep } from '@/shared/utils/sleep';

import { ClientPart } from './_ui/ClientPart/ClientPart';
import { ServerChild } from './_ui/ServerChild';
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
