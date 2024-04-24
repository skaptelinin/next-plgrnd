import { getCachedConfig, sleep, suspendable } from '@/shared';

import { ConfigMonitorUI } from '../_ConfigMonitorUI/ConfigMonitorUI';

const SConfigMonitor = async () => {
  await sleep(2_000);
  const config = await getCachedConfig();

  return (
    <ConfigMonitorUI {...config} componentType="Server" />
  );
};

export const ServerConfigMonitor = suspendable(SConfigMonitor);
