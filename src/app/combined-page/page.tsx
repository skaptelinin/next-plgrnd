import { ClientConfigMonitor, ServerConfigMonitor } from '@/features';

import { CombinedComp } from './_widgets';

const CombinedPage = () => (
  <>
    <ClientConfigMonitor />
    <ServerConfigMonitor />
    <CombinedComp />
  </>
);

export default CombinedPage;
