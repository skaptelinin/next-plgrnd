'use client'
import { createContext, useContext, useState } from 'react';
import type { FC, ReactNode } from 'react';

import type { Config } from './interfaces';

const DEFAULT_CONFIG: Config = {
    theme: 'dark',
    lang: 'en',
}

const ClientConfigContext = createContext<Config>(DEFAULT_CONFIG);

export const useConfig = (): Config => useContext<Config>(ClientConfigContext);

export const ClientConfigProvider: FC<{ config: Config, children: ReactNode }> = ({
    children, config,
}) => {
    const [configValue] = useState<Config>(config);

    return (
        <ClientConfigContext.Provider value={configValue}>
            {children}
        </ClientConfigContext.Provider>
    );
};
