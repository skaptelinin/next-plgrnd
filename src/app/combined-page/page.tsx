import { ClientConfigMonitor, ServerConfigMonitor } from '@/features';
import { ServerConfigProvider } from '@/shared';

import { CombinedComp } from './_widgets';

const CombinedPage = () => (
  <ServerConfigProvider>
    <ClientConfigMonitor />
    <ServerConfigMonitor />
    <CombinedComp />
  </ServerConfigProvider>
);

export default CombinedPage;
