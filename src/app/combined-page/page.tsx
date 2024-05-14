import { type FC } from 'react';

import { ClientConfigMonitor, ServerConfigMonitor, ServerConfigProvider } from '@/features/Config';

import { CombinedComp } from './_widgets/CombinedComp';

const CombinedPage: FC = () => {
  return (
    <ServerConfigProvider>
      <ClientConfigMonitor />
      <ServerConfigMonitor />
      <CombinedComp />
    </ServerConfigProvider>
  );
}

export default CombinedPage;
