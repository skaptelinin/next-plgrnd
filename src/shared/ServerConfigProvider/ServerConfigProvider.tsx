import type { ReactNode } from 'react';

import { ClientConfigProvider } from './ClientConfigProvider';
import { getCachedConfig } from './getServerConfig';

export const ServerConfigProvider = async ({ children }: {
    children: ReactNode,
}) => {
    const config = await getCachedConfig();

    return (
        <ClientConfigProvider config={config}>
            {children}
        </ClientConfigProvider>
    );
};