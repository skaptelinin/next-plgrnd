import type { ReactNode } from 'react';

import { sleep, randomChoice } from '@/shared';

import { ClientConfigProvider } from './ClientConfigProvider';
import type { Config, Theme, Lang } from './interfaces';

const generateConfig = async (): Promise<Config> => {
    await sleep(500);
    return ({
        theme: randomChoice<Theme>(['light', 'dark', 'system']),
        lang: randomChoice<Lang>(['ru', 'en']),
    });
};

export const ServerConfigProvider = async ({ children }: {
    children: ReactNode,
}) => {
    const config = await generateConfig();

    return (
        <ClientConfigProvider config={config}>
            {children}
        </ClientConfigProvider>
    );
};
