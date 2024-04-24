import { getCachedConfig, sleep, suspendable } from '@/shared';

import { ConfigMonitorUI } from '../_ConfigMonitorUI/ConfigMonitorUI';

export const ServerConfigMonitor = suspendable(async () => {
  await sleep(2_000);
  const config = await getCachedConfig();

  return (
    <ConfigMonitorUI {...config} componentType="Server" />
  );
});
