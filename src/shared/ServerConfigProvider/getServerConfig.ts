import { cache } from 'react';

import { Config, type Lang, randomChoice, sleep, type Theme } from '@/shared';

export const generateConfig = async (): Promise<Config> => {
    console.log('call generateConfig', Date.now());
    await sleep(500);
    return ({
        theme: randomChoice<Theme>(['light', 'dark', 'system']),
        lang: randomChoice<Lang>(['ru', 'en']),
    });
};

export const getCachedConfig = cache<() => Promise<Config>>(generateConfig);
