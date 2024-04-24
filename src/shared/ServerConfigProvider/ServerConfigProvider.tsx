import type { ReactNode } from 'react';

import { suspendable } from '../ui/suspendable';
import { ClientConfigProvider } from './ClientConfigProvider';
import { getCachedConfig } from './getServerConfig';

export const ServerConfigProvider = suspendable(async ({ children }: {
    children: ReactNode,
}) => {
  const config = await getCachedConfig();

  return (
    <ClientConfigProvider config={config}>
      {children}
    </ClientConfigProvider>
  );
});
