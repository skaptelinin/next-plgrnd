import { cache } from 'react';

import { sleep } from '@/shared/utils/sleep';
import { randomChoice } from '@/shared/utils/randomChoice';

import { type Config, type Lang, type Theme } from '../interfaces';

export const generateConfig = async (): Promise<Config> => {
    console.log('call generateConfig', Date.now());
    await sleep(1_500);
    return ({
        theme: randomChoice<Theme>(['light', 'dark', 'system']),
        lang: randomChoice<Lang>(['ru', 'en']),
    });
};

export const getCachedConfig = cache<() => Promise<Config>>(generateConfig);
