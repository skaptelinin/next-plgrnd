'use client'
import type { FC } from 'react';

import { useConfig, PropertyRow } from '@/shared';

export const ConfigMonitor: FC = () => {
    const { lang, theme } = useConfig();

    return (
        <div>
            <PropertyRow label="Language" value={lang} />
            <PropertyRow label="Theme" value={theme} />
        </div>
    );
};
