import Image from "next/image";

import { Server } from '@/widgets';
import { ConfigMonitor } from '@/features';
import { ServerConfigProvider } from '@/shared';

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
        <ServerConfigProvider>
          <ConfigMonitor />
          <Server />
        </ServerConfigProvider>
    </main>
  );
}
