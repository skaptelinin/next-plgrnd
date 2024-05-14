import { suspendable } from '@/shared/ui/suspendable';
import { sleep } from '@/shared/utils/sleep';

import { ConfigMonitorUI } from '../_ConfigMonitorUI/ConfigMonitorUI';
import { getCachedConfig } from '../ServerConfigProvider';

export const ServerConfigMonitor = suspendable(async () => {
  await sleep(2_000);
  const config = await getCachedConfig();

  return (
    <ConfigMonitorUI {...config} componentType="Server" />
  );
});
